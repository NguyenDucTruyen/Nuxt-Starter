<script setup>
import DefaultAvatar from '@/assets/images/default-avatar.png'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

const { loggedIn, user, clear } = useUserSession()

async function handleLogout() {
  await clear()
  navigateTo('/auth/login')
}
</script>

<template>
  <DropdownMenu
    v-if="loggedIn"
  >
    <DropdownMenuTrigger>
      <button class="flex items-center cursor-pointer rounded-full p-2 justify-center hover:bg-accent hover:text-accent-foreground">
        <img
          :src="user.avatar_url ?? DefaultAvatar"
          alt=""
          class="h-6 w-6 rounded-full object-cover cursor-pointer"
        >
      </button>
    </DropdownMenuTrigger>
    <DropdownMenuContent class="w-64">
      <div class="flex w-full p-2 gap-2">
        <img
          :src="user.avatar_url ?? DefaultAvatar"
          alt=""
          class="h-10 w-10 rounded-full object-cover"
        >
        <div class="grid flex-1 text-left text-sm leading-tight">
          <span class="truncate font-medium">{{ user?.full_name ?? user.email }}</span>
          <span class="truncate text-foreground/60 text-xs">{{ String(user?.role).toUpperCase() }}</span>
        </div>
      </div>
      <DropdownMenuSeparator />
      <NuxtLink to="/settings/account">
        <DropdownMenuItem>
          Account
        </DropdownMenuItem>
      </NuxtLink>
      <DropdownMenuSeparator />
      <NuxtLink to="/settings/pricing">
        <DropdownMenuItem>
          Pricing
        </DropdownMenuItem>
      </NuxtLink>
      <DropdownMenuSeparator />
      <DropdownMenuItem @click="handleLogout">
        Logout
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
