"use client"

import React, { createContext, useContext, useState, useEffect } from "react"

export type User = {
  id: string
  name: string
  identifier: string // mobile or email
  role?: string
}

type AuthModalMode = "login" | "register"

type AuthContextType = {
  user: User | null
  isLoading: boolean
  isLoginModalOpen: boolean
  modalMode: AuthModalMode
  openLoginModal: (mode?: AuthModalMode) => void
  closeLoginModal: () => void
  login: (userData: User, token: string) => void
  logout: () => void
  updateUser: (userData: Partial<User>) => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  // মডালের স্টেট ও মোড (login / register) কন্ট্রোল করার জন্য
  const [isLoginModalOpen, setIsLoginModalOpen] = useState<boolean>(false)
  const [modalMode, setModalMode] = useState<AuthModalMode>("login")

  useEffect(() => {
    const checkAuthUser = () => {
      try {
        const storedUser = localStorage.getItem("tech_core_user")
        if (storedUser) {
          setUser(JSON.parse(storedUser))
        }
      } catch (error) {
        console.error("Failed to parse user from localStorage", error)
      } finally {
        setIsLoading(false)
      }
    }

    checkAuthUser()
  }, [])

  // মডাল ওপেন করার সময় মোড সেট করে দেওয়া (ডিফল্ট "login")
  const openLoginModal = (mode: AuthModalMode = "login") => {
    setModalMode(mode)
    setIsLoginModalOpen(true)
  }

  const closeLoginModal = () => setIsLoginModalOpen(false)

  const login = (userData: User, token: string) => {
    setUser(userData)
    localStorage.setItem("tech_core_user", JSON.stringify(userData))
    localStorage.setItem("tech_core_token", token)
    closeLoginModal() // সফলভাবে লগইন হলে মডাল বন্ধ হয়ে যাবে
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("tech_core_user")
    localStorage.removeItem("tech_core_token")
  }

  const updateUser = (userData: Partial<User>) => {
    setUser((prev) => {
      if (!prev) return null
      const updated = { ...prev, ...userData }
      localStorage.setItem("tech_core_user", JSON.stringify(updated))
      return updated
    })
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        isLoginModalOpen,
        modalMode,
        openLoginModal,
        closeLoginModal,
        login,
        logout,
        updateUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
