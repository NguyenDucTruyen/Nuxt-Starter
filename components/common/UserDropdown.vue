<script setup>
import Button from '@/components/ui/button/Button.vue'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useRouter } from 'vue-router'

const { loggedIn, user, clear } = useUserSession()
const router = useRouter()

function handleLogout() {
  clear()
}
</script>

<template>
  <DropdownMenu
    v-if="loggedIn"
  >
    <DropdownMenuTrigger>
      <button class="flex items-center cursor-pointer rounded-full p-2 justify-center hover:bg-accent hover:text-accent-foreground">
        <img
          v-lazy="`${user.avatar_url}`"
          alt=""
          class="h-6 w-6 rounded-full object-cover cursor-pointer"
        >
      </button>
    </DropdownMenuTrigger>
    <DropdownMenuContent
      class="w-52 rounded-lg"
      side="bottom"
      align="end"
      :side-offset="4"
    >
      <DropdownMenuContent class="w-56">
        <div class="flex w-full p-2 gap-2">
          <img
            v-lazy="`${user.avatar_url}`"
            alt=""
            class="h-10 w-10 rounded-full object-cover"
          >
          <div class="max-lg:hidden  grid flex-1 text-left text-base leading-tight">
            <span class="truncate font-medium">{{ user?.full_name ?? user.email }}</span>
            <span class="truncate text-foreground/60 text-xs">{{ String(user?.role).toUpperCase() }}</span>
          </div>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem @click="redirectProfile">
          Thông tin cá nhân
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem @click="handleLogout">
          Đăng xuất
        </DropdownMenuItem>
      </DropdownMenuContent>
    </dropdownmenucontent>
  </DropdownMenu>
</template>
