import React from 'react';

export const Oversikt: React.FC = () => {
    return (
        <div className="w-full h-full overflow-y-scroll scrollbar ml-5 flex flex-col min-h-full">
            <h2 className="text-2xl font-semibold mb-4">Oversikt</h2>
            <p>
                I denne gjennomgangen skal vi sette opp en virtuell server med Ubuntu og installere en IRC-server
                (Internet Relay Chat), slik at vi kan hoste en IRC-tjeneste som kun er tilgjengelig innenfor vårt lokale nettverk (LAN).
            </p>
            <h2 className='text-2xl mt-4'>Hva vil du lære?</h2>
            <ul>
                <li>&#x2022; Hvordan sette opp en virtuell maskin i Hyper-V</li>
                <li>&#x2022; Hvordan forberede miljøet ditt for installasjon av InspIRCd</li>
                <li>&#x2022; Hvordan bygge og installere InspIRCd fra GitHub</li>
                <li>&#x2022; Hvordan starte din første InspIRCd-server</li>
                <li>&#x2022; Hvordan konfigurere InspIRCd</li>
                <li>&#x2022; Hvordan koble deg til IRC-Serveren du har laget</li>
            </ul>


            <br />
            <p className="font-semibold">Hvordan aktivere Hyper-V:</p>
            <iframe
                className="w-[650px] h-96"
                src="https://www.youtube.com/embed/4pjurHHvOFQ"
                title="2024 - How to Enable Microsoft Hyper V in Windows 11"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
            ></iframe>



            <div className="flex justify-center gap-4 mt-auto pt-4">
                <button className="px-4 py-2 bg-gray-300 text-gray-500 rounded-lg cursor-not-allowed" disabled>
                ◀
                </button>
                <a
                className="px-4 py-2 border-stone-800 border text-black rounded-lg hover:bg-stone-200"
                href="#oppretting"
                >
                ▶
                </a>
            </div>
        </div>
    );
};

export const Oppretting: React.FC = () => {
    return (
      <div className="w-full h-full overflow-y-scroll scrollbar ml-5 flex flex-col min-h-full">
        <h2 className="text-2xl font-semibold mb-3">Oppretting av Ubuntu VM</h2>
        <p className="mb-4 text-gray-700">
          Følg disse stegene for å opprette en virtuell maskin (VM) med <strong>Ubuntu</strong> i Hyper-V:
        </p>
  
        <ol className="list-decimal list-inside space-y-2">
          <li>
            Klikk på <strong>Start-menyen</strong>, søk etter <strong>“Hyper-V Manager”</strong>, og åpne programmet.
          </li>
          <li>
            I høyre panel i Hyper-V Manager finner du knappen <strong>“Quick Create”</strong>. Klikk på denne for å åpne Quick Create-dialogen.
          </li>
          <li>
            I Quick Create-vinduet vil du se en liste med operativsystemmaler, finn og velg <strong>“Ubuntu”</strong>.
          </li>
          <li>Velg den nyeste versjonen og trykk <strong>"Create Virtual Machine"</strong>.</li>
          <li>
            Du kan redigere innstillinger som <strong>VM-navn, minnestørrelse, antall prosessorer</strong> og <strong>lagringsplass</strong> før oppstart.
          </li>
          <li>
            Disse tilpasningene er valgfri, men nyttige dersom du har spesifikke krav til ressursbruk.
          </li>
          <li>
            Etter opprettelsen <strong>skal du ikke starte VM-en</strong> ennå. Først må du konfigurere nettverket 
            for å koble den til ditt fysiske nettverk.
          </li>
        </ol>
  
        <div className="flex justify-center gap-4 mt-auto pt-4">
          <a
            className="px-4 py-2 border-stone-800 border text-black rounded-lg hover:bg-stone-200"
            href="#oversikt"
          >
            ◀
          </a>
          <a
            className="px-4 py-2 border-stone-800 border text-black rounded-lg hover:bg-stone-200"
            href="#nettverk"
          >
             ▶
          </a>
        </div>
      </div>
    );
  };
  

export const Nettverk: React.FC = () => {
    return (
        <div className="w-full h-full overflow-y-scroll scrollbar ml-5 flex flex-col min-h-full">
          <h2 className="text-2xl font-semibold mb-3">Konfigurering av nettverk</h2>
          <p className="mb-4 text-gray-700">
            For å koble din virtuelle maskin til nettverket, må du opprette en ekstern virtuell switch og tilknytte den til VM-en.
          </p>
      
          <h3 className="text-xl font-semibold mb-3">Opprett en ekstern virtuell switch</h3>
          <ol className="list-decimal list-inside space-y-2">
            <li>Åpne <strong>Hyper-V Manager</strong> og klikk på “Virtual Switch Manager” i høyre panel.</li>
            <li>Velg “External” og klikk på “Create Virtual Switch”.</li>
            <li>Velg den fysiske nettverksadapteren du ønsker å bruke for ekstern tilkobling.</li>
            <li>Gi switchen et beskrivende navn, for eksempel <strong>“External Switch”</strong>, og lagre innstillingene.</li>
          </ol>
      
          <h3 className="text-xl font-semibold mt-6 mb-3">Koble den eksterne switchen til VM-en</h3>
          <ol className="list-decimal list-inside space-y-2">
            <li>Høyreklikk på din virtuelle maskin i <strong>Hyper-V Manager</strong> og velg “Settings”.</li>
            <li>Gå til “Network Adapter” i venstre meny.</li>
            <li>Under “Virtual switch”, velg den eksterne switchen du nettopp opprettet.</li>
            <li>Klikk “OK” for å lagre innstillingene.</li>
          </ol>
      
          <h3 className="text-xl font-semibold mt-6 mb-3">Start VM-en</h3>
          <ol className="list-decimal list-inside space-y-2">
            <li>Høyreklikk på VM-en og velg “Start”.</li>
            <li>Når VM-en er startet, koble til den via “Connect” og fullfør Ubuntu-installasjonen.</li>
          </ol>
      
          <h3 className="text-xl font-semibold mt-6 mb-3">Konfigurere statisk IP</h3>
          <p className="mb-4 text-gray-700">
            Hvis du ønsker å sette en statisk IP-adresse på din Ubuntu VM, følg disse stegene:
          </p>
          
          <ol className="list-decimal list-inside space-y-2">
            <li>
              Finn nettverksnavnet ved å kjøre følgende kommando:
              <code className="block bg-gray-200 p-2 rounded-md">ip a</code>
              Navnet kan være noe som <code>eth0</code>, <code>enp3s0</code> eller <code>wlp2s0</code>.
            </li>
            <li>
              Rediger netplan-konfigurasjonen ved å kjøre:
              <code className="block bg-gray-200 p-2 rounded-md">sudo nano /etc/netplan/01-netcfg.yaml</code>
            </li>
            <li>
              Bytt ut innholdet med følgende, og erstatt <code>eth0</code> med nettverksnavnet du fant:
              <pre className="block bg-gray-200 p-2 rounded-md overflow-x-auto">
    network: <br/>
    &nbsp;version: 2<br/>
    &nbsp;renderer: networkd<br/>
    &nbsp;ethernets:<br/>
    &nbsp;&nbsp;eth0:  # Bytt til nettverksnavnet du fant tidligere<br/>
    &nbsp;&nbsp;&nbsp;dhcp4: no<br/>
    &nbsp;&nbsp;&nbsp;addresses:<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;- 192.168.50.<strong>100</strong>/24  # Bytt ut <strong>100</strong> med din ønsket IP-adresse (0-255)<br/>
    &nbsp;&nbsp;&nbsp;gateway4: 192.168.1.1  # Bytt til ruterens gateway<br/>
    &nbsp;&nbsp;&nbsp;nameservers:<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;addresses:<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- 8.8.8.8<br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- 8.8.4.4  # Google DNS, eller bruk ønsket DNS<br/>
              </pre>
            </li>
            <li>
              Lagre filen ved å trykke <code>Ctrl + X</code>, deretter <code>Y</code> og <code>Enter</code>.
            </li>
            <li>
              Påfør endringene ved å kjøre:
              <code className="block bg-gray-200 p-2 rounded-md">sudo netplan apply</code>
            </li>
            <li>
              Verifiser at IP-adressen er endret ved å kjøre:
              <code className="block bg-gray-200 p-2 rounded-md">ip a</code>
            </li>
          </ol>
      
          <div className="flex justify-center gap-4 mt-auto pt-4">
            <a
              className="px-4 py-2 border-stone-800 border text-black rounded-lg hover:bg-stone-200"
              href="#oppretting"
            >
              ◀
            </a>
            <a
              className="px-4 py-2 border-stone-800 border text-black rounded-lg hover:bg-stone-200"
              href="#installasjon"
            >
              ▶
            </a>
          </div>
        </div>
      );
};

export const Installasjon: React.FC = () => {
    return (
        <div className="w-full h-full overflow-y-scroll scrollbar ml-5 flex flex-col min-h-full">
          <h2 className="text-2xl font-semibold mb-3">Installer nødvendige moduler</h2>
          <p className="mb-4 text-gray-700">
            For å komme i gang med prosjektet, må du installere noen nødvendige moduler på systemet ditt. Følg disse stegene for å installere de nødvendige pakkene.
          </p>
      
          <ol className="list-decimal list-inside space-y-2">
            <li>
              Først, installer <strong>git</strong>, som er et versjonskontrollsystem. Dette kan gjøres med følgende kommando:
              <code className="block bg-gray-200 p-2 rounded-md">sudo apt-get install git</code>
            </li>
            <li>
              Deretter må du installere <strong>perl</strong>, som er et skriptspråk som kan være nødvendig for enkelte verktøy:
              <code className="block bg-gray-200 p-2 rounded-md">sudo apt-get install perl</code>
            </li>
            <li>
              Du trenger også <strong>g++</strong>, som er en C++ compiler. Installer denne med:
              <code className="block bg-gray-200 p-2 rounded-md">sudo apt-get install g++</code>
            </li>
            <li>
              Til slutt, installer <strong>make</strong>, som er et verktøy for å automatisere bygging av programvare:
              <code className="block bg-gray-200 p-2 rounded-md">sudo apt-get install make</code>
            </li>
          </ol>
      
          <h3 className="text-xl font-semibold mt-6 mb-3">Hva gjør du hvis det oppstår problemer?</h3>
          <p className="mb-4 text-gray-700">
            Hvis du støter på problemer under installasjonen, kan du prøve å oppdatere pakkelisten og fikse eventuelle ødelagte pakker med de følgende kommandoene:
          </p>
          <ol className="list-decimal list-inside space-y-2">
            <li>
              Oppdater pakkelisten for å forsikre deg om at systemet ditt har den nyeste informasjonen om tilgjengelige pakker:
              <code className="block bg-gray-200 p-2 rounded-md">sudo apt-get update</code>
            </li>
            <li>
              Hvis du får feilmeldinger relatert til ødelagte pakker, kan du prøve å fikse dem med:
              <code className="block bg-gray-200 p-2 rounded-md">sudo apt-get install --fix-broken</code>
            </li>
            <li>
              For ytterligere feilretting, kan du bruke denne kommandoen for å fikse eventuelle ødelagte pakker på systemet:
              <code className="block bg-gray-200 p-2 rounded-md">sudo apt --fix-broken install</code>
            </li>
          </ol>
      
          <div className="flex justify-center gap-4 mt-auto pt-4">
            <a
              className="px-4 py-2 border-stone-800 border text-black rounded-lg hover:bg-stone-200"
              href="#nettverk"
            >
              ◀
            </a>
            <a
              className="px-4 py-2 border-stone-800 border text-black rounded-lg hover:bg-stone-200"
              href="#nedlasting"
            >
              ▶
            </a>
          </div>
        </div>
      );

};

export const Nedlasting: React.FC = () => {
    return (
        <div className="w-full h-full overflow-y-scroll scrollbar ml-5 flex flex-col min-h-full">
          <h2 className="text-2xl font-semibold mb-3">Last ned og pakk ut InspIRCd</h2>
          <p className="mb-4 text-gray-700">
            For å installere <strong>InspIRCd</strong>, må vi laste ned den nyeste versjonen av kildekoden og pakke den ut. 
            Følg disse stegene for å gjøre dette riktig.
          </p>
      
          <h3 className="text-xl font-semibold mt-6 mb-3">Steg 1: Finn den nyeste versjonen</h3>
          <p className="mb-4 text-gray-700">
            Den nyeste versjonen av <strong>InspIRCd</strong> kan alltid lastes ned fra følgende side:
          </p>
          <a
            className="text-blue-600 underline mb-4"
            href="https://github.com/inspircd/inspircd/releases/latest"
            target="_blank"
            rel="noopener noreferrer"
          >
            InspIRCd GitHub Releases
          </a>
      
          <h3 className="text-xl font-semibold mt-6 mb-3">Steg 2: Last ned kildekoden</h3>
          <p className="mb-4 text-gray-700">
            Vi skal laste ned kildekoden som et <code>.tar.gz</code>-arkiv. Du kan gjøre dette manuelt ved å besøke 
            lenken ovenfor og laste ned filen via nettleseren, eller du kan bruke følgende kommando i terminalen:
          </p>
          <code className="block bg-gray-200 p-2 rounded-md">
            wget https://github.com/inspircd/inspircd/archive/v2.0.25.tar.gz
          </code>
      
          <p className="mb-4 text-gray-700">
            I dette eksempelet laster vi ned versjon <strong>2.0.25</strong>. Hvis det finnes en nyere versjon, bytt ut <strong>"v2.0.25"</strong> i URL-en med den nyeste versjonsnummeret.
          </p>
      
          <h3 className="text-xl font-semibold mt-6 mb-3">Steg 3: Pakk ut arkivet</h3>
          <p className="mb-4 text-gray-700">
            Når nedlastingen er fullført, må vi pakke ut arkivet for å få tilgang til kildekoden. Dette gjøres med følgende kommando:
          </p>
          <code className="block bg-gray-200 p-2 rounded-md">
            tar xvf ./v2.0.25.tar.gz
          </code>
      
          <p className="mb-4 text-gray-700">
            Dette vil pakke ut alle filene i arkivet til en ny mappe med samme navn som versjonen du har lastet ned.
          </p>
      
          <div className="flex justify-center gap-4 mt-auto pt-4">
            <a
              className="px-4 py-2 border-stone-800 border text-black rounded-lg hover:bg-stone-200"
              href="#installasjon"
            >
              ◀
            </a>
            <a
              className="px-4 py-2 border-stone-800 border text-black rounded-lg hover:bg-stone-200"
              href="#build-konfigurasjon"
            >
              ▶
            </a>
          </div>
        </div>
      );
};

export const BuildKonfigurasjon: React.FC = () => {
    return (
        <div className="w-full h-full overflow-y-scroll scrollbar ml-5 flex flex-col min-h-full">
          <h2 className="text-2xl font-semibold mb-3">Konfigurering av InspIRCd</h2>
          <p className="mb-4 text-gray-700">
            Når kildekoden er lastet ned og pakket ut, kan vi konfigurere hvordan <strong>InspIRCd</strong> skal bygges.
          </p>
      
          <h3 className="text-xl font-semibold mt-6 mb-3">Steg 1: Gå til installasjonskatalogen</h3>
          <p className="mb-4 text-gray-700">
            Naviger til katalogen der kildekoden er pakket ut. Husk å bruke riktig versjonsnummer:
          </p>
          <code className="block bg-gray-200 p-2 rounded-md">
            cd inspircd-2.0.25
          </code>
          <p className="mb-4 text-gray-700">
            Erstatt <code>2.0.25</code> med versjonen du lastet ned.
          </p>
      
          <h3 className="text-xl font-semibold mt-6 mb-3">Steg 2: Start konfigurasjonen</h3>
          <p className="mb-4 text-gray-700">
            Kjør følgende kommando for å starte konfigurasjonsprosessen:
          </p>
          <code className="block bg-gray-200 p-2 rounded-md">
            perl ./configure
          </code>
          <p className="mb-4 text-gray-700">
            Du vil nå bli stilt en rekke spørsmål. Hvis du er usikker, trykk <strong>Enter</strong> for å velge standardverdiene.
          </p>
      
          <p className="mb-4 text-gray-700">
            Det siste spørsmålet vil spørre om du vil sjekke etter oppdateringer til tredjepartsmoduler. Svar <strong>"y"</strong> for ja.
          </p>
      
          <h3 className="text-xl font-semibold mt-6 mb-3">Steg 3: Bekreft konfigurasjonen</h3>
          <p className="mb-4 text-gray-700">
            Når konfigurasjonen er fullført, bør utdataene se omtrent slik ut:
          </p>
          <pre className="block bg-gray-200 p-2 rounded-md">
            Ok, 144 modules.{"\n"}
            Writing inspircd_config.h{"\n"}
            Writing GNUmakefile ...{"\n"}
            Writing BSDmakefile ...{"\n"}
            Writing inspircd ...{"\n"}
            Writing cache file for future ./configures ...{"\n\n"}
            To build your server with these settings, please run 'make' now.{"\n"}
            *** Remember to edit your configuration files!!! ***
          </pre>
      
          <p className="mb-4 text-gray-700">
            Konfigurasjonen er nå ferdig, og vi kan gå videre til byggeprosessen.
          </p>
      
          <div className="flex justify-center gap-4 mt-auto pt-4">
            <a
              className="px-4 py-2 border-stone-800 border text-black rounded-lg hover:bg-stone-200"
              href="#nedlasting"
            >
              ◀
            </a>
            <a
              className="px-4 py-2 border-stone-800 border text-black rounded-lg hover:bg-stone-200"
              href="#build-serveren"
            >
              ▶
            </a>
          </div>
        </div>
      );
      
};

export const BuildServeren: React.FC = () => {
    return (
        <div className="w-full h-full overflow-y-scroll scrollbar ml-5 flex flex-col min-h-full">
          <h2 className="text-2xl font-semibold mt-6 mb-3">Bygging av InspIRCd</h2>
          <p className="mb-4 text-gray-700">
            Nå som konfigurasjonen er fullført, kan vi bygge <strong>InspIRCd</strong>.  
            Dette gjøres ved å kjøre <code>make</code> i installasjonskatalogen.
          </p>
      
          <h3 className="text-xl font-semibold mb-3">Steg 1: Bygg serveren</h3>
          <p className="mb-4 text-gray-700">
            Kjør følgende kommando i terminalen:
          </p>
          <code className="block bg-gray-200 p-2 rounded-md">
            make
          </code>
          <p className="mb-4 text-gray-700">
            Byggeprosessen kan ta rundt 10 minutter, avhengig av systemytelsen.
          </p>
      
          <h3 className="text-xl font-semibold mt-6 mb-3">Steg 2: Installer</h3>
          <p className="mb-4 text-gray-700">
            Når byggingen er fullført, kjør følgende kommando for å installere:
          </p>
          <code className="block bg-gray-200 p-2 rounded-md">
            make install
          </code>
      
          <p className="mb-4 text-gray-700">
            Når installasjonen er ferdig, vil du se en oversikt over hvor filene er plassert:
          </p>
          <pre className="block bg-gray-200 p-2 rounded-md">
            *************************************{"\n"}
            *       BUILDING INSPIRCD           *{"\n"}
            *                                   *{"\n"}
            *   This will take a *long* time.   *{"\n"}
            *     Why not read our wiki at      *{"\n"}
            *     http://wiki.inspircd.org      *{"\n"}
            *  while you wait for make to run?  *{"\n"}
            *************************************{"\n\n"}
      
            *************************************{"\n"}
            *        INSTALL COMPLETE!          *{"\n"}
            *************************************{"\n"}
            Paths:{"\n"}
              Base install: /home/javier/build/inspircd-2.0.25/run{"\n"}
              Configuration: /home/javier/build/inspircd-2.0.25/run/conf{"\n"}
              Binaries: /home/javier/build/inspircd-2.0.25/run/bin{"\n"}
              Modules: /home/javier/build/inspircd-2.0.25/run/modules{"\n"}
              Data: /home/javier/build/inspircd-2.0.25/run/data{"\n\n"}
            To start the ircd, run: /home/javier/build/inspircd-2.0.25/run/inspircd start{"\n"}
            Remember to create your config file: /home/javier/build/inspircd-2.0.25/run/conf/inspircd.conf{"\n"}
            Examples are available at: /home/javier/build/inspircd-2.0.25/run/conf/examples/
          </pre>
      
          <p className="mb-4 text-gray-700">
            InspIRCd er nå installert, og vi kan gå videre til konfigurasjonen.
          </p>
      
          <div className="flex justify-center gap-4 mt-auto pt-4">
            <a
              className="px-4 py-2 border-stone-800 border text-black rounded-lg hover:bg-stone-200"
              href="#build-konfigurasjon"
            >
              ◀
            </a>
            <a
              className="px-4 py-2 border-stone-800 border text-black rounded-lg hover:bg-stone-200"
              href="#server-konfigurasjon"
            >
              ▶
            </a>
          </div>
        </div>
      );
      
};

export const ServerKonfigurasjon: React.FC = () => {
    return (
        <div className="w-full h-full overflow-y-scroll scrollbar ml-5 flex flex-col min-h-full">
          <h2 className="text-2xl font-semibold mt-6 mb-3">Konfigurering av InspIRCd</h2>
          <p className="mb-4 text-gray-700">
            Nå som InspIRCd er installert, må vi konfigurere serveren. Dette gjøres ved å opprette en konfigurasjonsfil.
          </p>
      
          <h3 className="text-xl font-semibold mb-3">Steg 1: Opprett konfigurasjonsfil</h3>
          <p className="mb-4 text-gray-700">
            I terminalen bruk <code>cd inspircd-2.0.25</code> (eller din versjon) og opprett en ny tekstfil med følgende kommando:
          </p>
          <code className="block bg-gray-200 p-2 rounded-md">
            nano run/config/inspircd.conf
          </code>
          <p className="mb-4 text-gray-700">Deretter, legg inn følgende innhold i filen:</p>
      
          <pre className="block bg-gray-200 p-2 rounded-md">
            {`<config format="xml">
      <define name="bindip" value="1.2.2.3">
      <define name="localips" value="&bindip;/24">
      
      ####### SERVER CONFIGURATION #######
      
      <server
              name="SERVER_HOSTNAME/FQDN"
              description="SERVER_DESCRIPTION"
              id="SERVER_SID"
              network="NETWORK_NAME">
      
      ####### ADMIN INFO #######
      
      <admin
             name="ADMIN_NAME"
             nick="ADMIN_NICK"
             email="ADMIN_EMAIL">
      
      ####### PORT CONFIGURATION #######
      
      <bind
            address="SERVER_IP"
            port="SERVER_PORT"
            type="SERVER_TYPE">
      </config>`}
          </pre>
      
          <h3 className="text-xl font-semibold mt-6 mb-3">Steg 2: Tilpass konfigurasjonen</h3>
          <p className="mb-4 text-gray-700">
            Endre følgende verdier i konfigurasjonsfilen slik at de passer din egen server:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li><strong>SERVER_HOSTNAME/FQDN:</strong> Hostnavnet for serveren</li>
            <li><strong>SERVER_DESCRIPTION:</strong> En beskrivelse av serveren</li>
            <li><strong>SERVER_SID:</strong> En unik 3-tegns ID (den første må være et tall, f. eks 97K)</li>
            <li><strong>NETWORK_NAME:</strong> Navnet på IRC-nettverket</li>
            <li><strong>ADMIN_NAME:</strong> IRC-administratorens navn</li>
            <li><strong>ADMIN_NICK:</strong> IRC-administratorens kallenavn</li>
            <li><strong>ADMIN_EMAIL:</strong> IRC-administratorens e-post</li>
            <li><strong>SERVER_IP:</strong> Serverens offentlige IP (la det stå 0.0.0.0 så alle kan koble seg til)</li>
            <li><strong>SERVER_PORT:</strong> Serverens port (6667 for ukrypert tilkobling, 6697 for SSL kryptert tilkobling)</li>
            <li><strong>SERVER_TYPE:</strong> "clients" hvis serveren er for klienter</li>
          </ul>
      
          <h3 className="text-xl font-semibold mt-6 mb-3">Eksempel på ferdig konfigurasjon</h3>
          <pre className="block bg-gray-200 p-2 rounded-md">
            {`<config format="xml">
      <define name="bindip" value="1.2.2.3">
      <define name="localips" value="&bindip;/24">
      
      ####### SERVER CONFIGURATION #######
      
      <server
              name="glemmen.devdocs.com"
              description="Velkommen til Glemmen DevDocs"
              id="97K"
              network="glemmen.devdocs.com">
      
      ####### ADMIN INFO #######
      
      <admin
             name="glemmen devdocs"
             nick="tutorial"
             email="tutorials@glemmendevdocs.com">
      
      ####### PORT CONFIGURATION #######
      
      <bind
            address="0.0.0.0"
            port="6667"
            type="clients">
      </config>`}
          </pre>
      
          <p className="mb-4 text-gray-700">
            Når du har gjort endringene, husk å lagre filen! I nano kan du gjøre dette ved å trykke <code>Ctrl + X</code>, deretter <code>Y</code> og <code>Enter</code>.
          </p>
      
          <div className="flex justify-center gap-4 mt-auto pt-4">
            <a
              className="px-4 py-2 border-stone-800 border text-black rounded-lg hover:bg-stone-200"
              href="#build-serveren"
            >
              ◀
            </a>
            <a
              className="px-4 py-2 border-stone-800 border text-black rounded-lg hover:bg-stone-200"
              href="#start-serveren"
            >
              ▶
            </a>
          </div>
        </div>
      );
      
};

export const StartServeren: React.FC = () => {
    return (
        <div className="w-full h-full overflow-y-scroll scrollbar ml-5 flex flex-col min-h-full">
          <h2 className="text-2xl font-semibold mb-3">Kjøre serveren for første gang</h2>
          <p className="mb-4 text-gray-700">
            Nå som vi har konfigurert alt, er det på tide å starte opp <strong>InspIRCd</strong> for første gang!
            Følg disse stegene for å starte serveren.
          </p>
      
          <h3 className="text-xl font-semibold mt-6 mb-3">Steg 1: Start serveren</h3>
          <p className="mb-4 text-gray-700">
            Åpne terminalen og skriv inn følgende kommandoer for å starte serveren:
          </p>
          <code className="block bg-gray-200 p-2 rounded-md">
            ./inspircd start
          </code>
          
          <p className="mb-4 text-gray-700">
            Når serveren er startet, kan du sjekke statusen ved å bruke denne kommandoen:
          </p>
          <code className="block bg-gray-200 p-2 rounded-md">
            ./inspircd status
          </code>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">Steg 2: Bekreft at serveren kjører</h3>
          <p className="mb-4 text-gray-700">
            Hvis serveren er startet riktig, vil du se noe slikt i terminalen:
          </p>
          <pre className="bg-gray-200 p-2 rounded-md">
            InspIRCd is running (PID: 13301)
          </pre>
          
          <p className="mb-4 text-gray-700">
            Gratulerer! Serveren din er nå online og tilgjengelig. 
            Enhver IRC-klient som kan koble til serveren din, vil nå kunne koble til <strong>InspIRCd</strong>.
          </p>
      
          <div className="flex justify-center gap-4 mt-auto pt-4">
            <a
              className="px-4 py-2 border-stone-800 border text-black rounded-lg hover:bg-stone-200"
              href="#server-konfigurasjon"
            >
              ◀
            </a>
            <a
              className="px-4 py-2 border-stone-800 border text-black rounded-lg hover:bg-stone-200"
              href="#kobling"
            >
              ▶
            </a>
          </div>
        </div>
      );
      
};

export const Kobling: React.FC = () => {
    return (
        <div className="w-full h-full overflow-y-scroll scrollbar ml-5 flex flex-col min-h-full">
          <h2 className="text-2xl font-semibold mb-3">Hvordan koble seg til</h2>
          <p className="mb-4 text-gray-700">
            Vi skal nå gå gjennom hvordan du laster ned og installerer <strong>HexChat</strong> på Ubuntu via terminalen, 
            og hvordan du konfigurerer og kobler til en IRC-server.
          </p>
      
          <h3 className="text-xl font-semibold mt-6 mb-3">Steg 1: Last ned og installer HexChat</h3>
          <p className="mb-4 text-gray-700">
            For å installere <strong>HexChat</strong> på Ubuntu, åpne terminalen og skriv inn følgende kommando:
          </p>
          <code className="block bg-gray-200 p-2 rounded-md">
            sudo apt install hexchat
          </code>
      
          <p className="mb-4 text-gray-700">
            Denne kommandoen installerer <strong>HexChat</strong> på systemet ditt.
          </p>
      
          <h3 className="text-xl font-semibold mt-6 mb-3">Steg 2: Åpne HexChat</h3>
          <p className="mb-4 text-gray-700">
            Etter at installasjonen er fullført, kan du åpne <strong>HexChat</strong> ved å skrive følgende kommando i terminalen:
          </p>
          <code className="block bg-gray-200 p-2 rounded-md">
            hexchat
          </code>
      
          <p className="mb-4 text-gray-700">
            Dette åpner HexChat-klienten. Du vil nå bli møtt med et oppsettvindu hvis det er første gang du åpner programmet.
          </p>

          <h3 className="text-xl font-semibold mb-3">Steg 3: Legg til en server</h3>
          <p className="mb-4 text-gray-700">
            Først, trykk på <strong>"Add"</strong> i serverlisten. Deretter kan du gi serveren et navn etter eget ønske.
          </p>
      
          <h3 className="text-xl font-semibold mt-6 mb-3">Steg 4: Rediger serverinformasjonen</h3>
          <p className="mb-4 text-gray-700">
            Når serveren er lagt til, trykk på <strong>"Edit"</strong>. I feltet øverst, endre <strong>"newserver"</strong> 
            til serverens adresse (for eksempel <strong>glemmen.devdocs.com</strong>) og endre portnummeret til <strong>6667</strong> eller porten serveren bruker.
          </p>
          <code className="block bg-gray-200 p-2 rounded-md">
            glemmen.devdocs.com/6667
          </code>
      
          <h3 className="text-xl font-semibold mt-6 mb-3">Steg 5: Deaktiver SSL</h3>
          <p className="mb-4 text-gray-700">
            Under serverinnstillingene vil du se noen sjekkbokser. Hvis serveren ikke bruker SSL-kryptering, må du fjerne haken på <br />
            <strong>"Use SSL for all the servers on this network"</strong>.
          </p>
      
          <h3 className="text-xl font-semibold mt-6 mb-3">Steg 4: Lagre innstillingene og lukk</h3>
          <p className="mb-4 text-gray-700">
            Etter at du har redigert innstillingene, trykk på <strong>"Close"</strong>. Nå vil serveren vises i serverlisten.
          </p>
      
          <h3 className="text-xl font-semibold mt-6 mb-3">Steg 5: Koble til serveren</h3>
          <p className="mb-4 text-gray-700">
            For å koble til serveren, velg serveren fra listen og trykk på <strong>"Connect"</strong>.
          </p>
      
          <div className="flex justify-center gap-4 mt-auto pt-4">
            <a
              className="px-4 py-2 border-stone-800 border text-black rounded-lg hover:bg-stone-200"
              href="#start-serveren"
            >
              ◀
            </a>
            <button className="px-4 py-2 bg-gray-300 text-gray-500 rounded-lg cursor-not-allowed" disabled>
                ▶
            </button>
          </div>
        </div>
      );
};

export const contentPages: { [key: string]: React.FC } = {
  oversikt: Oversikt,
  oppretting: Oppretting,
  nettverk: Nettverk,
  installasjon: Installasjon,
  nedlasting: Nedlasting,
  "build-konfigurasjon": BuildKonfigurasjon,
  "build-serveren": BuildServeren,
  "server-konfigurasjon": ServerKonfigurasjon,
  "start-serveren": StartServeren,
  kobling: Kobling,
};
