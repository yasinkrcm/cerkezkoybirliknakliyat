export function successResponse(data = null, message = "İşlem başarılı") {
  return {
    ok: true,
    message,
    data,
  }
}

export function errorResponse(message = "Bir hata oluştu", code = "GENERAL_ERROR", details = null) {
  return {
    ok: false,
    message,
    code,
    details,
  }
}

export function validationErrorResponse(errors) {
  return {
    ok: false,
    message: "Doğrulama hatası",
    code: "VALIDATION_ERROR",
    details: errors,
  }
}

export function unauthorizedResponse(message = "Yetkisiz erişim") {
  return {
    ok: false,
    message,
    code: "UNAUTHORIZED",
  }
}

export function notFoundResponse(message = "Kayıt bulunamadı") {
  return {
    ok: false,
    message,
    code: "NOT_FOUND",
  }
}
