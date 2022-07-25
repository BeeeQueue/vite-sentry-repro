import * as Sentry from "@sentry/react"

Sentry.init({
  enabled: true,
  dsn: "dsn!",
  environment: "env",
  release: "import.meta.sha",
  ignoreErrors: [],
})

Sentry.setUser({
  id: "user.organization.fullOrganizationUuid",
})
Sentry.setTags({
  language: "user.locale.language",
  country: "user.locale.country",
  currency: "user.locale.currency",
  isMobileApp: "user.isMobileApp",
  customerStatus: "user.organization.customerStatus",
  identityProvider: "user.identityProvider",
  businessIdentityProvider: "user.businessIdentityProvider",
})
Sentry.setExtra("betaFeatures", "user.organization.betaFeatures")