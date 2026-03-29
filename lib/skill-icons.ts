/**
 * Re-exporta ícones Simple Icons via namespace para evitar a otimização de barrel
 * do Next (`optimizePackageImports`), que em alguns ambientes deixa exports como undefined.
 */
import type { IconType } from "react-icons/lib"
import * as SI from "react-icons/si"

export const SiHtml5: IconType = SI.SiHtml5
export const SiCss: IconType = SI.SiCss
export const SiJavascript: IconType = SI.SiJavascript
export const SiReact: IconType = SI.SiReact
export const SiNodedotjs: IconType = SI.SiNodedotjs
export const SiExpress: IconType = SI.SiExpress
export const SiNextdotjs: IconType = SI.SiNextdotjs
export const SiTypescript: IconType = SI.SiTypescript
export const SiTailwindcss: IconType = SI.SiTailwindcss
export const SiMongodb: IconType = SI.SiMongodb
export const SiGit: IconType = SI.SiGit
export const SiDocker: IconType = SI.SiDocker
export const SiFigma: IconType = SI.SiFigma
export const SiBootstrap: IconType = SI.SiBootstrap
export const SiSass: IconType = SI.SiSass
export const SiRedux: IconType = SI.SiRedux
export const SiJest: IconType = SI.SiJest
