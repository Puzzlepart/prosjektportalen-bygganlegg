# Bygg & anlegg tilpasninger for Prosjektportalen

NB: Dette et tilpasningene for Prosjektportalen 2. Ser du etter bygg og anlegg-tilpasningene for Prosjektportalen 365? https://github.com/Puzzlepart/prosjektportalen365-bygganlegg

Bygg & anlegg tilpasninger for Prosjektportalen er to valgfrie tilleggspakker som installeres hver for seg på områdesamlinger hvor [Prosjektportalen](https://github.com/Puzzlepart/prosjektportalen) allerede er installert. Etter at tilpasningen er installert kan en opprette områder enten av type bygg eller av type anlegg avhengig av hvilken tilleggspakke som er installert på områdesamlingen. Hvert område er et eget område ganske lik et standard prosjektområde, men det har noen ulikheter

* Nytt og tilpasset standardinnhold (dokumenter, fasesjekkpunkter)
* Tilpassede prosjektegenskaper for bygg- og anleggsprosjekter
* Egne faser som er tilpasset bygg/anlegg

## Installering

Bygg & anlegg installeres på hver sin egen områdesamling over en Prosjektportalen-installasjon. Det blir altså en portefølje for bygg og en for anlegg, for eksempel https://tenant.sharepoint/sites/prosjektportalen-bygg eller https://tenant.sharepoint/sites/prosjektportalen-anlegg. Installasjonen av Prosjektportalen gjøres uten standarddata, slik at standarddata kommer fra bygg- eller anleggspakken.

### Håndtering av PnP Powershell for installasjon

PnP Powershell er automatisk bundlet med standard installasjon av Prosjektportalen, men ikke i disse tilleggspakkene. Det er derfor en forutsetning at for å installere denne tilpasningen så må du passe på å

* Enten ha installert riktig PnP PowerShell på PCen du installerer fra. Se [PnP PowerShell på GitHub](https://github.com/SharePoint/PnP-PowerShell), eller
* Kjøre installasjonen i samme PowerShell-vindu som du installerte Prosjektportalen fra. Da er PnP PowerShell allerede lastet i sesjonen.

Bygg & anlegg tilpasninger for Prosjektportalen installeres med Powershell på følgende måte (eksempel med bygg-tilpasninger).

1. [Prosjektportalen](https://github.com/Puzzlepart/prosjektportalen) må være installert. Ved installasjon av Prosjektportalen bør du bruke -SkipData parameteren slik at standard data ikke blir installert. Eksempel:

```PowerShell
./Install.ps1 -Url "https://puzzlepart.sharepoint.com/sites/bygg" -SkipData
```

2. Installer Bygg-tilpasningene (i dette eksempelet) på følgende måte

```PowerShell
./Install.ps1 -Url "https://puzzlepart.sharepoint.com/sites/bygg" -ProjectType Bygg
```

## Kontakt

Har du spørsmål vedrørende Bygg & anlegg tilpasninger for Prosjektportalen, behov for bistand til installasjon av løsningen eller er interessert i muligheter for videreutvikling og spesialtilpasninger, ta kontakt med [prosjektportalen@puzzlepart.com](mailto:prosjektportalen@puzzlepart.com). Vi gjør oppmerksom på at eventuell bistand vil være en fakturerbar tjeneste.

## Maintainers

* [Tarjei Ormestøyl](tarjeieo@puzzlepart.com)
* [Thomas Granheim](thomasog@puzzlepart.com)
