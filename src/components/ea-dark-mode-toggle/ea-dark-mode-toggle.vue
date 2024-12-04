<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'

const storageKey = 'theme-preference'

const isDarkMode = ref<boolean>(localStorage.getItem(storageKey) === 'true' || false)

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value
}

const applyTheme = () => {
  const rootElement = document.documentElement

  if (isDarkMode.value) {
    rootElement.setAttribute('data-theme', 'dark')
  } else {
    rootElement.setAttribute('data-theme', 'light')
  }

  localStorage.setItem(storageKey, isDarkMode.value.toString())
}

watch(isDarkMode, applyTheme)
onMounted(applyTheme)
</script>

<template>
  <div class="cluster justify-between align-center full">
    <label for="dark-mode-toggle">App Theme</label>
    <div class="cluster gap-xs">
      <button
        @click="toggleDarkMode"
        class="dark-mode-toggle"
        :aria-label="isDarkMode ? 'Disable dark mode' : 'Enable dark mode'"
        type="button"
        id="dark-mode-toggle"
        aria-live="polite"
      >
        <svg
          focusable="false"
          class="sun-and-moon"
          aria-hidden="true"
          width="20"
          height="20"
          viewBox="0 0 24 24"
        >
          <circle
            class="sun"
            cx="12"
            cy="12"
            r="6"
            mask="url(#moon-mask)"
            fill="var(--color-primary)"
          />
          <g class="sun-beams" stroke="var(--color-primary)">
            <line x1="12" y1="1" x2="12" y2="3" />
            <line x1="12" y1="21" x2="12" y2="23" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
            <line x1="1" y1="12" x2="3" y2="12" />
            <line x1="21" y1="12" x2="23" y2="12" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
          </g>
          <mask class="moon" id="moon-mask">
            <rect x="0" y="0" height="100%" width="100%" fill="white" />
            <circle cx="24" cy="10" r="6" fill="black" />
          </mask>
        </svg>
      </button>
      <output>{{ isDarkMode ? 'Dark' : 'Light' }}</output>
    </div>
  </div>
</template>

<style lang="scss" scoped>
label {
  display: unset;
  inline-size: fit-content;
  margin: 0;
}

output {
  font-family: var(--font-family-body);
  font-size: var(--font-size-s);
  color: var(--color-on-primary);
  display: inline-block;
  position: relative;
  line-height: 1.5;
  text-align: center;
  border-radius: 5px;
  background: var(--color-primary);
  padding: var(--space-3xs) var(--space-2xs);
  margin: 0;
  min-inline-size: 9ch;
}

.dark-mode-toggle {
  color: var(--color-primary);

  --size: 1.5rem;
  --icon-fill: var(--color-primary);
  --ease-1: cubic-bezier(0.25, 0, 0.5, 1);
  --ease-2: cubic-bezier(0.25, 0, 0.4, 1);
  --ease-3: cubic-bezier(0.25, 0, 0.3, 1);
  --ease-4: cubic-bezier(0.25, 0, 0.2, 1);
  --ease-5: cubic-bezier(0.25, 0, 0.1, 1);
  --ease-in-1: cubic-bezier(0.25, 0, 1, 1);
  --ease-in-2: cubic-bezier(0.5, 0, 1, 1);
  --ease-in-3: cubic-bezier(0.7, 0, 1, 1);
  --ease-in-4: cubic-bezier(0.9, 0, 1, 1);
  --ease-in-5: cubic-bezier(1, 0, 1, 1);
  --ease-out-1: cubic-bezier(0, 0, 0.75, 1);
  --ease-out-2: cubic-bezier(0, 0, 0.5, 1);
  --ease-out-3: cubic-bezier(0, 0, 0.3, 1);
  --ease-out-4: cubic-bezier(0, 0, 0.1, 1);
  --ease-out-5: cubic-bezier(0, 0, 0, 1);
  --ease-in-out-1: cubic-bezier(0.1, 0, 0.9, 1);
  --ease-in-out-2: cubic-bezier(0.3, 0, 0.7, 1);
  --ease-in-out-3: cubic-bezier(0.5, 0, 0.5, 1);
  --ease-in-out-4: cubic-bezier(0.7, 0, 0.3, 1);
  --ease-in-out-5: cubic-bezier(0.9, 0, 0.1, 1);
  --ease-elastic-1: cubic-bezier(0.5, 0.75, 0.75, 1.25);
  --ease-elastic-2: cubic-bezier(0.5, 1, 0.75, 1.25);
  --ease-elastic-3: cubic-bezier(0.5, 1.25, 0.75, 1.25);
  --ease-elastic-4: cubic-bezier(0.5, 1.5, 0.75, 1.25);
  --ease-elastic-5: cubic-bezier(0.5, 1.75, 0.75, 1.25);
  --ease-squish-1: cubic-bezier(0.5, -0.1, 0.1, 1.5);
  --ease-squish-2: cubic-bezier(0.5, -0.3, 0.1, 1.5);
  --ease-squish-3: cubic-bezier(0.5, -0.5, 0.1, 1.5);
  --ease-squish-4: cubic-bezier(0.5, -0.7, 0.1, 1.5);
  --ease-squish-5: cubic-bezier(0.5, -0.9, 0.1, 1.5);
  --ease-step-1: steps(2);
  --ease-step-2: steps(3);
  --ease-step-3: steps(4);
  --ease-step-4: steps(7);
  --ease-step-5: steps(10);
}

@media (prefers-reduced-motion: no-preference) {
  .sun-and-moon > .sun {
    transition: transform 0.5s var(--ease-elastic-3);
  }

  .sun-and-moon > .sun-beams {
    transition:
      transform 0.5s var(--ease-elastic-4),
      opacity 0.5s var(--ease-3);
  }

  .sun-and-moon > .moon > circle {
    transform: translateX(-7px);
    transition: transform 0.25s var(--ease-out-5);
  }

  [data-theme='dark'] .sun-and-moon > .sun {
    transform: scale(1.75);
    transition-timing-function: var(--ease-3);
    transition-duration: 0.25s;
  }

  [data-theme='dark'] .sun-and-moon > .sun-beams {
    transform: rotateZ(-25deg);
    transition-duration: 0.15s;
  }

  [data-theme='dark'] .sun-and-moon > .moon > circle {
    transition-delay: 0.25s;
    transition-duration: 0.5s;
  }
}

.dark-mode-toggle {
  background: none;
  border: none;
  padding: 0;
  inline-size: var(--size);
  block-size: var(--size);
  aspect-ratio: 1/1;
  border-radius: 50%;
  cursor: pointer;
  touch-action: manipulation;
  -webkit-tap-highlight-color: transparent;
  outline-offset: 5px;
}

.dark-mode-toggle > svg {
  inline-size: 100%;
  block-size: 100%;
  stroke-linecap: round;
}

.sun-and-moon > .sun,
.sun-and-moon > .moon,
.sun-and-moon > .sun-beams {
  transform-origin: center center;
}

.sun-and-moon > .moon circle {
  transform: translateX(7px);
}

[data-theme='dark'] .sun-and-moon > .moon circle {
  transform: translateX(-7px);
}

[data-theme='dark'] .sun-and-moon > .sun {
  transform: scale(1.75);
}

[data-theme='dark'] .sun-and-moon > .sun-beams {
  opacity: 0;
}

.dark-mode-toggle > .sun-and-moon > .sun {
  fill: var(--icon-fill);
}

.dark-mode-toggle:is(:hover, :focus-visible) > .sun-and-moon > .sun {
  fill: var(--icon-fill);
}

.dark-mode-toggle:is(:hover, :focus-visible) > .sun-and-moon > .sun-beams {
  stroke: var(--icon-fill);
}

[data-theme='dark'] .dark-mode-toggle > .sun-and-moon > .sun {
  fill: var(--icon-fill);
}

[data-theme='dark'] .dark-mode-toggle:is(:hover, :focus-visible) > .sun-and-moon > .sun {
  fill: var(--icon-fill);
}

[data-theme='dark'] .dark-mode-toggle > .sun-and-moon > .sun-beams {
  stroke: var(--icon-fill);
}

[data-theme='dark'] .dark-mode-toggle:is(:hover, :focus-visible) > .sun-and-moon > .sun-beams {
  stroke: var(--icon-fill);
}

@media (hover: none) {
  .dark-mode-toggle {
    --size: 2rem;
  }
}
</style>
