"use client"

import { useEffect } from "react"
import { useRouter } from "next/router"
import { useAuth } from "../contexts/AuthContext"
import LoadingSpinner from "./LoadingSpinner"

export default function ProtectedRoute({ children, requiredRole = null, redirectTo = "/login" }) {
  const { user, loading, isAuthenticated } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading) {
      if (!isAuthenticated) {
        router.push(redirectTo)
        return
      }

      if (requiredRole && user?.role !== requiredRole) {
        // Redirect based on user role
        if (user?.role === "admin") {
          router.push("/admin")
        } else if (user?.role === "driver") {
          router.push("/driver")
        } else {
          router.push("/dashboard")
        }
        return
      }
    }
  }, [user, loading, isAuthenticated, requiredRole, router, redirectTo])

  if (loading) {
    return <LoadingSpinner />
  }

  if (!isAuthenticated) {
    return null
  }

  if (requiredRole && user?.role !== requiredRole) {
    return null
  }

  return children
}
