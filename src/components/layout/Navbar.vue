<script setup lang="ts">
import { ref, computed } from 'vue'
import { toggleTheme } from '@/plugins/theme'

defineOptions({ name: 'AppNavbar' })

const open = ref(false)
const toggle = () => (open.value = !open.value)
const close = () => (open.value = false)

const isDark = computed(() => document.documentElement.classList.contains('dark'))

const onToggleTheme = () => {
  toggleTheme()
}
</script>
