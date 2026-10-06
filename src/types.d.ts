import type Gio from 'gi://Gio'
import type GObject from 'gi://GObject'


export type DisplayingItems = { character: boolean; percentage: boolean }

export type DisplayingItemNick = 'character-and-percentage' | 'percentage-only' | 'character-only'

export type CharacterState = 'idle' | 'active'

export type Character = 'cat' | 'dog' | 'monkey'

export interface RunCatIndicatorReactiveProperties {
	character: Character
	cpuUsage: number
	currentSpriteFrame: Gio.Icon
	displayingItems: DisplayingItems
	isSpeedInverted: boolean
	idleThreshold: number
	isAnimationSmoothingEnabled: boolean
}

export type GObjectProperties<T> = {
	[K in keyof T]: GObject.ParamSpec<T[K]>
}
