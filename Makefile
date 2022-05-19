###########################################################################
## Open and Run cypress for Rumah123 Core Front End All
###########################################################################
r123-dev:
	@npx cypress open --env configFile=r123-dev

r123-rls:
	@npx cypress open --env configFile=r123-rls

r123-prod:
	@npx cypress open --env configFile=r123-prod

r123-dev-run:
	@npx cypress run --env configFile=r123-dev

r123-rls-run:
	@npx cypress run --env configFile=r123-rls

r123-prod-run:
	@npx cypress run --env configFile=r123-prod

###########################################################################
# Open and Run cypress for Rumah123 Desktop
###########################################################################
desktop-r123-dev:
	@npx cypress open --env configFile=r123-dev,folder=desktop

desktop-r123-rls:
	@npx cypress open --env configFile=r123-rls,folder=desktop

desktop-r123-prod:
	@npx cypress open --env configFile=r123-prod,folder=desktop

desktop-r123-dev-run:
	@npx cypress run --env configFile=r123-dev,folder=desktop

desktop-r123-rls-run:
	@npx cypress run --env configFile=r123-rls,folder=desktop

desktop-r123-prod-run:
	@npx cypress run --env configFile=r123-prod,folder=desktop

###########################################################################
# Open and Run Cypress for Rumah123 Mobile Site
###########################################################################
msite-r123-dev:
	@npx cypress open --env configFile=r123-dev,folder=mobile-site

msite-r123-rls:
	@npx cypress open --env configFile=r123-rls,folder=mobile-site

msite-r123-prod:
	@npx cypress open --env configFile=r123-prod,folder=mobile-site

msite-r123-dev-run:
	@npx cypress run --env configFile=r123-dev,folder=mobile-site

msite-r123-rls-run:
	@npx cypress run --env configFile=r123-rls,folder=mobile-site

msite-r123-prod-run:
	@npx cypress run --env configFile=r123-prod,folder=mobile-site

###########################################################################
# Open and Run cypress for Legacy Rumah123 Customer
###########################################################################
legacy-r123-dev:
	@npx cypress open --env configFile=lr123-dev

legacy-r123-stg:
	@npx cypress open --env configFile=lr123-stg

legacy-r123-rls:
	@npx cypress open --env configFile=lr123-rls

legacy-r123-prod:
	@npx cypress open --env configFile=lr123-prod

legacy-r123-dev-run:
	@npx cypress run --env configFile=lr123-dev

legacy-r123-stg-run:
	@npx cypress run --env configFile=lr123-stg

legacy-r123-rls-run:
	@npx cypress run --env configFile=lr123-rls

legacy-r123-prod-run:
	@npx cypress run --env configFile=lr123-prod

###########################################################################
# Open and Run cypress for Admin Rumah123
###########################################################################
admin-r123-stg:
	@npx cypress open --env configFile=admr123-stg

admin-r123-prod:
	@npx cypress open --env configFile=admr123-prod

admin-r123-stg-run:
	@npx cypress run --env configFile=admr123-stg

admin-r123-prod-run:
	@npx cypress run --env configFile=admr123-prod

###########################################################################
# Open and Run cypress for Data Tracker Rumah123
###########################################################################
data-r123-prod:
	@npx cypress open --env configFile=r123-prod,folder=data-tracker

data-r123-prod-run:
	@npx cypress run --env configFile=r123-prod,folder=data-tracker

data-r123-smoke-run:
	@npx cypress run --env configFile=r123-prod,folder=data-tracker,grepTags=smoke

###########################################################################
## Open and Run cypress for 99 ID
###########################################################################
99id-dw:
	@npx cypress open --env configFile=99id-dw

99id-prod:
	@npx cypress open --env configFile=99id-prod

99id-dw-run:
	@npx cypress run --env configFile=99id-dw

99id-prod-run:
	@npx cypress run --env configFile=99id-prod

###########################################################################
# Open and Run cypress for Rumah123 SEO
###########################################################################
desktop-seo-r123-dev:
	@npx cypress open --env configFile=r123-dev,folder=seo

dekstop-seo-r123-rls:
	@npx cypress open --env configFile=r123-rls,folder=seo

dekstop-seo-r123-prod:
	@npx cypress open --env configFile=r123-prod,folder=seo

desktop-seo-r123-dev-run:
	@npx cypress run --env configFile=r123-dev,folder=seo

dekstop-seo-r123-rls-run:
	@npx cypress run --env configFile=r123-rls,folder=seo

dekstop-seo-r123-prod-run:
	@npx cypress run --env configFile=r123-prod,folder=seo


###########################################################################
# Open and Run cypress for ERP
###########################################################################
erp-dev:
	@npx cypress open --env configFile=erp-dev

erp-prod:
	@npx cypress open --env configFile=erp-prod

erp-dev-run:
	@npx cypress run --env configFile=erp-dev

erp-prod-run:
	@npx cypress run --env configFile=erp-prod

###########################################################################
# Open and Run cypress for CRM
###########################################################################
crm-dev:
	@npx cypress open --env configFile=crm-dev

crm-rls:
	@npx cypress open --env configFile=crm-rls

crm-prod:
	@npx cypress open --env configFile=crm-prod

crm-dev-run:
	@npx cypress run --env configFile=crm-dev

crm-rls-run:
	@npx cypress run --env configFile=crm-rls

crm-prod-run:
	@npx cypress run --env configFile=crm-prod

###########################################################################
# Open and Run cypress for microsite
###########################################################################
microsite-prod:
	@npx cypress open --env configFile=microsite-prod

microsite-prod-run:
	@npx cypress run --env configFile=microsite-prod

###########################################################################
# Open and Run cypress for rumah123 API
###########################################################################
r123-api-prod:
	@npx cypress open --env configFile=r123-api-prod

r123-api-prod-run:
	@npx cypress run --env configFile=r213-api-prod

r123-api-stg:
	@npx cypress open --env configFile=r123-api-stg

r123-api-stg-run:
	@npx cypress run --env configFile=r213-api-stg


###########################################################################
# Open and Run cypress for rumah123 GRAPHQL
###########################################################################
r123-graphql-stg:
	@npx cypress open --env configFile=r123-graphql-stg

r123-graphql-stg-run:
	@npx cypress run --env configFile=r213-graphql-stg
