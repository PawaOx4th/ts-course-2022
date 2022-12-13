const role = {
  admin: "Admin",
  user: "User"
} as const

type RoleKeyType = keyof typeof role

type RolsValueType = typeof role[keyof typeof role]
