<script setup lang="ts">
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Moon, Sun } from 'lucide-vue-next'

type Theme = 'light' | 'dark'
const colorMode = useColorMode()

function setColorTheme(newTheme: Theme) {
  colorMode.preference = newTheme
}
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger>
      <button class="flex items-center cursor-pointer rounded-full p-2 justify-center hover:bg-accent hover:text-accent-foreground">
        <Sun
          v-if="$colorMode.preference === 'light'"
          :size="24"
        />
        <Moon
          v-else
          :size="24"
        />
      </button>
    </DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuItem
        class="cursor-pointer"
        @click="setColorTheme('light')"
      >
        <Sun /> Light Mode
      </DropdownMenuItem>
      <Separator />
      <DropdownMenuItem
        class="cursor-pointer"
        @click="setColorTheme('dark')"
      >
        <Moon /> Dark Mode
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
