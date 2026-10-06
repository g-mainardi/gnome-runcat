import type {
	Character,
	DisplayingItemNick,
	DisplayingItems,
	RunCatIndicatorReactiveProperties,
} from './types'


export const LOG_PREFIX = 'RunpetExtension'

export const SYSTEM_MONITOR_COMMAND = 'gnome-system-monitor -r'

export const displayingItemNickToValue: Record<DisplayingItemNick, DisplayingItems> = {
	'character-and-percentage': { character: true, percentage: true },
	'percentage-only': { character: false, percentage: true },
	'character-only': { character: true, percentage: false },
} as const

// MUST USE THE SAME ORDER AS org.gnome.shell.extensions.runpet.Character
export const CHARACTERS: Character[] = ['cat', 'dog', 'monkey']

export const SettingsSchemaKeys = {
	CHARACTER: 'character',
	IDLE_THRESHOLD: 'idle-threshold',
	DISPLAYING_ITEMS: 'displaying-items',
	INVERT_SPEED: 'invert-speed',
	SMOOTH_SPEED_CHANGES: 'smooth-speed-changes',
	CUSTOM_SYSTEM_MONITOR: {
		ENABLED: 'custom-system-monitor-enabled',
		COMMAND: 'custom-system-monitor-command',
	},
} as const

export const ReactiveProperties = {
	CHARACTER: 'character',
	CPU_USAGE: 'cpuUsage',
	CURRENT_SPRITE_FRAME: 'currentSpriteFrame',
	DISPLAYING_ITEMS: 'displayingItems',
	IS_SPEED_INVERTED: 'isSpeedInverted',
	IDLE_THRESHOLD: 'idleThreshold',
	IS_ANIMATION_SMOOTHING_ENABLED: 'isAnimationSmoothingEnabled',
} as const satisfies Record<string, keyof RunCatIndicatorReactiveProperties>
