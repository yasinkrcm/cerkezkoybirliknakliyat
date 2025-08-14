"use client"

import { createContext, useContext, useEffect, useState } from "react"
import { useRouter } from "next/router"
import axios from "axios"
import toast from "react-hot-toast"

const AuthContext = createContext({})

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  // Check if user is authenticated on mount
  useEffect(() => {
    checkAuth()
  }, [])

  const checkAuth = async () => {
    try {
      const response = await axios.get("/api/auth/me")
      if (response.data.ok) {
        setUser(response.data.data.user)
      }
    } catch (error) {
      // User not authenticated
      setUser(null)
    } finally {
      setLoading(false)
    }
  }

  const login = async (email, password) => {
    try {
      const response = await axios.post("/api/auth/login", { email, password })

      if (response.data.ok) {
        setUser(response.data.data.user)
        toast.success(response.data.message)

        // Redirect based on role
        const userRole = response.data.data.user.role
        if (userRole === "admin") {
          router.push("/admin")
        } else if (userRole === "driver") {
          router.push("/driver")
        } else {
          router.push("/dashboard")
        }

        return { success: true }
      }
    } catch (error) {
      const message = error.response?.data?.message || "Giriş yapılırken hata oluştu"
      toast.error(message)
      return { success: false, error: message }
    }
  }

  const register = async (userData) => {
    try {
      const response = await axios.post("/api/auth/register", userData)

      if (response.data.ok) {
        setUser(response.data.data.user)
        toast.success(response.data.message)
        router.push("/dashboard")
        return { success: true }
      }
    } catch (error) {
      const message = error.response?.data?.message || "Kayıt olurken hata oluştu"
      toast.error(message)
      return { success: false, error: message, details: error.response?.data?.details }
    }
  }

  const logout = async () => {
    try {
      await axios.post("/api/auth/logout")
      setUser(null)
      toast.success("Çıkış yapıldı")
      router.push("/")
    } catch (error) {
      console.error("Logout error:", error)
      // Force logout even if API fails
      setUser(null)
      router.push("/")
    }
  }

  const value = {
    user,
    loading,
    login,
    register,
    logout,
    checkAuth,
    isAuthenticated: !!user,
    isAdmin: user?.role === "admin",
    isDriver: user?.role === "driver",
    isCustomer: user?.role === "customer",
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
