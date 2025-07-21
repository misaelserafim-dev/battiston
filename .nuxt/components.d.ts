
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T extends DefineComponent> = T & DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>>
type HydrationStrategies = {
  hydrateOnVisible?: IntersectionObserverInit | true
  hydrateOnIdle?: number | true
  hydrateOnInteraction?: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap> | true
  hydrateOnMediaQuery?: string
  hydrateAfter?: number
  hydrateWhen?: boolean
  hydrateNever?: true
}
type LazyComponent<T> = (T & DefineComponent<HydrationStrategies, {}, {}, {}, {}, {}, {}, { hydrated: () => void }>)
interface _GlobalComponents {
      'AdSpotCard': typeof import("../components/AdSpotCard.vue")['default']
    'AdSpotList': typeof import("../components/AdSpotList.vue")['default']
    'AdicionarPonto': typeof import("../components/AdicionarPonto.vue")['default']
    'BannerPesquisa': typeof import("../components/BannerPesquisa.vue")['default']
    'Contato': typeof import("../components/Contato.vue")['default']
    'FormContatoOrcamento': typeof import("../components/FormContatoOrcamento.vue")['default']
    'LogoSite': typeof import("../components/LogoSite.vue")['default']
    'Menu': typeof import("../components/Menu.vue")['default']
    'QuemSomos': typeof import("../components/QuemSomos.vue")['default']
    'FormPesquisa': typeof import("../components/formPesquisa.vue")['default']
    'IconeCarrinho': typeof import("../components/iconeCarrinho.vue")['default']
    'PrimaryButton': typeof import("../components/primaryButton.vue")['default']
    'SecondaryButton': typeof import("../components/secondaryButton.vue")['default']
    'TertiaryButton': typeof import("../components/tertiaryButton.vue")['default']
    'TituloPrimary': typeof import("../components/tituloPrimary.vue")['default']
    'TituloSecondary': typeof import("../components/tituloSecondary.vue")['default']
    'NuxtWelcome': typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
    'NuxtLayout': typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
    'NuxtErrorBoundary': typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
    'ClientOnly': typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
    'DevOnly': typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
    'ServerPlaceholder': typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
    'NuxtLink': typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
    'NuxtLoadingIndicator': typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
    'NuxtTime': typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
    'NuxtRouteAnnouncer': typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
    'NuxtImg': typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
    'NuxtPicture': typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
    'NuxtPage': typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
    'NoScript': typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
    'Link': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
    'Base': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
    'Title': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
    'Meta': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
    'Style': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
    'Head': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
    'Html': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
    'Body': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
    'NuxtIsland': typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
    'NuxtRouteAnnouncer': typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
      'LazyAdSpotCard': LazyComponent<typeof import("../components/AdSpotCard.vue")['default']>
    'LazyAdSpotList': LazyComponent<typeof import("../components/AdSpotList.vue")['default']>
    'LazyAdicionarPonto': LazyComponent<typeof import("../components/AdicionarPonto.vue")['default']>
    'LazyBannerPesquisa': LazyComponent<typeof import("../components/BannerPesquisa.vue")['default']>
    'LazyContato': LazyComponent<typeof import("../components/Contato.vue")['default']>
    'LazyFormContatoOrcamento': LazyComponent<typeof import("../components/FormContatoOrcamento.vue")['default']>
    'LazyLogoSite': LazyComponent<typeof import("../components/LogoSite.vue")['default']>
    'LazyMenu': LazyComponent<typeof import("../components/Menu.vue")['default']>
    'LazyQuemSomos': LazyComponent<typeof import("../components/QuemSomos.vue")['default']>
    'LazyFormPesquisa': LazyComponent<typeof import("../components/formPesquisa.vue")['default']>
    'LazyIconeCarrinho': LazyComponent<typeof import("../components/iconeCarrinho.vue")['default']>
    'LazyPrimaryButton': LazyComponent<typeof import("../components/primaryButton.vue")['default']>
    'LazySecondaryButton': LazyComponent<typeof import("../components/secondaryButton.vue")['default']>
    'LazyTertiaryButton': LazyComponent<typeof import("../components/tertiaryButton.vue")['default']>
    'LazyTituloPrimary': LazyComponent<typeof import("../components/tituloPrimary.vue")['default']>
    'LazyTituloSecondary': LazyComponent<typeof import("../components/tituloSecondary.vue")['default']>
    'LazyNuxtWelcome': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
    'LazyNuxtLayout': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
    'LazyNuxtErrorBoundary': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
    'LazyClientOnly': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
    'LazyDevOnly': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
    'LazyServerPlaceholder': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
    'LazyNuxtLink': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
    'LazyNuxtLoadingIndicator': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
    'LazyNuxtTime': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
    'LazyNuxtImg': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
    'LazyNuxtPicture': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
    'LazyNuxtPage': LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
    'LazyNoScript': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
    'LazyLink': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
    'LazyBase': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
    'LazyTitle': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
    'LazyMeta': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
    'LazyStyle': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
    'LazyHead': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
    'LazyHtml': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
    'LazyBody': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
    'LazyNuxtIsland': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export const AdSpotCard: typeof import("../components/AdSpotCard.vue")['default']
export const AdSpotList: typeof import("../components/AdSpotList.vue")['default']
export const AdicionarPonto: typeof import("../components/AdicionarPonto.vue")['default']
export const BannerPesquisa: typeof import("../components/BannerPesquisa.vue")['default']
export const Contato: typeof import("../components/Contato.vue")['default']
export const FormContatoOrcamento: typeof import("../components/FormContatoOrcamento.vue")['default']
export const LogoSite: typeof import("../components/LogoSite.vue")['default']
export const Menu: typeof import("../components/Menu.vue")['default']
export const QuemSomos: typeof import("../components/QuemSomos.vue")['default']
export const FormPesquisa: typeof import("../components/formPesquisa.vue")['default']
export const IconeCarrinho: typeof import("../components/iconeCarrinho.vue")['default']
export const PrimaryButton: typeof import("../components/primaryButton.vue")['default']
export const SecondaryButton: typeof import("../components/secondaryButton.vue")['default']
export const TertiaryButton: typeof import("../components/tertiaryButton.vue")['default']
export const TituloPrimary: typeof import("../components/tituloPrimary.vue")['default']
export const TituloSecondary: typeof import("../components/tituloSecondary.vue")['default']
export const NuxtWelcome: typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
export const NuxtLayout: typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
export const NuxtErrorBoundary: typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
export const ClientOnly: typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
export const DevOnly: typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
export const ServerPlaceholder: typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const NuxtLink: typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
export const NuxtLoadingIndicator: typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
export const NuxtTime: typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
export const NuxtRouteAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
export const NuxtImg: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
export const NuxtPicture: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
export const NuxtPage: typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
export const NoScript: typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
export const Link: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
export const Base: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
export const Title: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
export const Meta: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
export const Style: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
export const Head: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
export const Html: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
export const Body: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
export const NuxtIsland: typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
export const NuxtRouteAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const LazyAdSpotCard: LazyComponent<typeof import("../components/AdSpotCard.vue")['default']>
export const LazyAdSpotList: LazyComponent<typeof import("../components/AdSpotList.vue")['default']>
export const LazyAdicionarPonto: LazyComponent<typeof import("../components/AdicionarPonto.vue")['default']>
export const LazyBannerPesquisa: LazyComponent<typeof import("../components/BannerPesquisa.vue")['default']>
export const LazyContato: LazyComponent<typeof import("../components/Contato.vue")['default']>
export const LazyFormContatoOrcamento: LazyComponent<typeof import("../components/FormContatoOrcamento.vue")['default']>
export const LazyLogoSite: LazyComponent<typeof import("../components/LogoSite.vue")['default']>
export const LazyMenu: LazyComponent<typeof import("../components/Menu.vue")['default']>
export const LazyQuemSomos: LazyComponent<typeof import("../components/QuemSomos.vue")['default']>
export const LazyFormPesquisa: LazyComponent<typeof import("../components/formPesquisa.vue")['default']>
export const LazyIconeCarrinho: LazyComponent<typeof import("../components/iconeCarrinho.vue")['default']>
export const LazyPrimaryButton: LazyComponent<typeof import("../components/primaryButton.vue")['default']>
export const LazySecondaryButton: LazyComponent<typeof import("../components/secondaryButton.vue")['default']>
export const LazyTertiaryButton: LazyComponent<typeof import("../components/tertiaryButton.vue")['default']>
export const LazyTituloPrimary: LazyComponent<typeof import("../components/tituloPrimary.vue")['default']>
export const LazyTituloSecondary: LazyComponent<typeof import("../components/tituloSecondary.vue")['default']>
export const LazyNuxtWelcome: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
export const LazyNuxtLayout: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
export const LazyNuxtErrorBoundary: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
export const LazyClientOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
export const LazyDevOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
export const LazyServerPlaceholder: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyNuxtLink: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
export const LazyNuxtLoadingIndicator: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
export const LazyNuxtTime: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
export const LazyNuxtImg: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
export const LazyNuxtPicture: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
export const LazyNuxtPage: LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
export const LazyNoScript: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
export const LazyLink: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
export const LazyBase: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
export const LazyTitle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
export const LazyMeta: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
export const LazyStyle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
export const LazyHead: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
export const LazyHtml: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
export const LazyBody: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
export const LazyNuxtIsland: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>

export const componentNames: string[]
