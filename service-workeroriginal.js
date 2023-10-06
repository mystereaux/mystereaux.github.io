var cacheName = 'R9_ER_GuidesV1.50';
var cacheFiles = [
'./img/Zoom-icon.png',
'./img/open.png',


   './css/simple-sidebar.css',
   './css/simple-sidebar-table5.css',
   './vendor/jquery/jquery.min.js',
   './vendor/bootstrap/js/bootstrap.bundle.min.js',
   './vendor/bootstrap/css/bootstrap.min.css',

   './js/pdf.js',
   './js/pdf.worker.js',
   './js/pdfobject.min.js',

   './Main Page/Quick Start Guides.html',
   './Main Page/Air Monitoring Tables.html',
   './Main Page/Chemical Data Sheets.html',
   './Main Page/NIOSH Air Sampling Methods.html',
   './Main Page/First Steps and Preparation.html',
   './Main Page/Other Reference Documents.html',
   './Main Page/Analytical Methods Table.html',   
   './Main Page/Template Documents (Word).html',
  

   './doc/File Structure/Common/Emergency Response Checklist.pdf',
   './doc/File Structure/Common/On-Site Activities Flow Chartv.02.pdf',
   './doc/File Structure/Common/Quick Start Guides/QSG AreaRAE Pro and AreaRAE Plus.pdf',
   './doc/File Structure/Common/Quick Start Guides/QSG DustTrak 8533.pdf',
   './doc/File Structure/Common/Quick Start Guides/QSG DustTrak 8534.pdf',
   './doc/File Structure/Common/Quick Start Guides/QSG Gilian-GilAir-Plus.pdf',
     './doc/File Structure/Common/Quick Start Guides/QSG Defender Drycal.pdf',
     './doc/File Structure/Common/Quick Start Guides/QSG  HazMat ID.pdf',
     './doc/File Structure/Common/Quick Start Guides/EOG Ludlum 19 Micro R.pdf',
     './doc/File Structure/Common/Quick Start Guides/QSG Lumex 915M.pdf',
     './doc/File Structure/Common/Quick Start Guides/QSG Lumex 915Plus.pdf',
     './doc/File Structure/Common/Quick Start Guides/EOG MultiRAE PRO.pdf',
     './doc/File Structure/Common/Quick Start Guides/QSG PDR-1000.pdf',
     './doc/File Structure/Common/Quick Start Guides/MANUAL pDR 1500.pdf',
     './doc/File Structure/Common/Quick Start Guides/QSG SKC AirChek TOUCH.pdf',
     './doc/File Structure/Common/Quick Start Guides/QSG SPM Flex.pdf',
     './doc/File Structure/Common/Quick Start Guides/QSG TVA 2020.pdf',
     './doc/File Structure/Common/Quick Start Guides/MANUAL VIPER User Guide.pdf',
     './doc/File Structure/Common/Quick Start Guides/Viper- ProRae Guardian Setup.pdf',
     './doc/File Structure/Common/Quick Start Guides/Viper- SmartGateway 2020.pdf',
	
     './doc/File Structure/Common/Quick Start Guides/QSG GilAir-5 Sampler Pump v2.0.pdf',
     './doc/File Structure/Common/Quick Start Guides/QSG Ludlum 2241 v2.0.pdf',
     './doc/File Structure/Common/Quick Start Guides/QSG Level A Suit v2.0.pdf',
     './doc/File Structure/Common/Quick Start Guides/QSG Scott SCBA PAPR.pdf',
     './doc/File Structure/Common/Quick Start Guides/QSG Quick Take 30 v1.1.pdf',
     './doc/File Structure/Common/Quick Start Guides/QSG Scott SCBA v2.0.pdf',
     './doc/File Structure/Common/Quick Start Guides/QSG TVA-1000B v2.0.pdf',
     './doc/File Structure/Common/Quick Start Guides/QSG Summa v1.1.pdf',
     './doc/File Structure/Common/Quick Start Guides/QSG TerraSync Data Collection Procedure v 2.0.pdf',

     './doc/File Structure/Common/Quick Start Guides/QSG AP2Ce & AP4C v2.0.pdf',
     './doc/File Structure/Common/Quick Start Guides/QSG Drager CMS v2.0.pdf',
     './doc/File Structure/Common/Quick Start Guides/QSG Jerome J505 v1.pdf',
     './doc/File Structure/Common/Quick Start Guides/QSG SAM 935 v2.0.pdf',
     './doc/File Structure/Common/Quick Start Guides/QSG SAM 940 v2.0.pdf',
     './doc/File Structure/Common/Quick Start Guides/QSG Trimble GeoXH v 2.0.pdf',
     './doc/File Structure/Common/Quick Start Guides/QSG UltraRAE_3000 v 2.0.pdf',
     './doc/File Structure/Common/Quick Start Guides/QSG Gemini FTIR and RAMAN_Modified_02232021.pdf',

	
	 './doc/File Structure/Common/NIOSH Air Sampling Methods/EPA Method TO-4A.pdf',
     './doc/File Structure/Common/NIOSH Air Sampling Methods/EPA TO-10A.pdf',
     './doc/File Structure/Common/NIOSH Air Sampling Methods/EPA Method TO-13A.pdf',
     './doc/File Structure/Common/NIOSH Air Sampling Methods/EPA Method TO-15.pdf',
     './doc/File Structure/Common/NIOSH Air Sampling Methods/EPA Method TO-17.pdf',
	
     './doc/File Structure/Common/NIOSH Air Sampling Methods/NIOSH Method 0500.pdf',
     './doc/File Structure/Common/NIOSH Air Sampling Methods/NIOSH 1003 Hydrocarbons Halogenated.pdf',
     './doc/File Structure/Common/NIOSH Air Sampling Methods/NIOSH 1005 Methylene Chloride.pdf',
     './doc/File Structure/Common/NIOSH Air Sampling Methods/NIOSH 1007 Vinyl Chloride.pdf',
     './doc/File Structure/Common/NIOSH Air Sampling Methods/NIOSH 1016 1,1,1,2-Tetrachloro-2,2-Difluoroethane AND 1,1,2,2-Tetrachloro-1,2-Difluoroethane.pdf',
     './doc/File Structure/Common/NIOSH Air Sampling Methods/NIOSH 1020 1,1,2-Trichloro-1,2,2-Trifluoroethane.pdf',
     './doc/File Structure/Common/NIOSH Air Sampling Methods/NIOSH 1022 Trichloroethylene.pdf',
	 './doc/File Structure/Common/NIOSH Air Sampling Methods/NIOSH 1300.pdf',
     './doc/File Structure/Common/NIOSH Air Sampling Methods/NIOSH 1400 Alcohols.pdf',
     './doc/File Structure/Common/NIOSH Air Sampling Methods/NIOSH 1500 Hydrocarbons, BP 36-216 C.pdf',
     './doc/File Structure/Common/NIOSH Air Sampling Methods/NIOSH 1501 Hydrocarbons, Aromatic.pdf',
     './doc/File Structure/Common/NIOSH Air Sampling Methods/NIOSH 1550 Naphthas.pdf',
     './doc/File Structure/Common/NIOSH Air Sampling Methods/NIOSH 1603 Acetic Acid.pdf',
	 './doc/File Structure/Common/NIOSH Air Sampling Methods/NIOSH 1610.pdf',
	 './doc/File Structure/Common/NIOSH Air Sampling Methods/NIOSH 2000.pdf',
	 './doc/File Structure/Common/NIOSH Air Sampling Methods/NIOSH 2016.pdf',
	 './doc/File Structure/Common/NIOSH Air Sampling Methods/NIOSH 2538.pdf',
     './doc/File Structure/Common/NIOSH Air Sampling Methods/NIOSH 2542 Mercaptans, Methyl-, Ethyl-, and n-Butyl.pdf',
     './doc/File Structure/Common/NIOSH Air Sampling Methods/NIOSH 3503.pdf',
     './doc/File Structure/Common/NIOSH Air Sampling Methods/NIOSH Method 5023.pdf',
     './doc/File Structure/Common/NIOSH Air Sampling Methods/NIOSH Method 5503.pdf',
     './doc/File Structure/Common/NIOSH Air Sampling Methods/NIOSH Method 5506.pdf',
	 './doc/File Structure/Common/NIOSH Air Sampling Methods/NIOSH 5512.pdf',
     './doc/File Structure/Common/NIOSH Air Sampling Methods/NIOSH 6001 Arsine.pdf',
     './doc/File Structure/Common/NIOSH Air Sampling Methods/NIOSH Method 6002.pdf',
     './doc/File Structure/Common/NIOSH Air Sampling Methods/NIOSH Method 6004.pdf',
	 './doc/File Structure/Common/NIOSH Air Sampling Methods/NIOSH 6005.pdf',
     './doc/File Structure/Common/NIOSH Air Sampling Methods/NIOSH 6009 Mercury.pdf',
     './doc/File Structure/Common/NIOSH Air Sampling Methods/NIOSH 6010 Hydrogen Cyanide.pdf',
     './doc/File Structure/Common/NIOSH Air Sampling Methods/NIOSH Method 6011.pdf',
     './doc/File Structure/Common/NIOSH Air Sampling Methods/NIOSH Method 6014.pdf',
     './doc/File Structure/Common/NIOSH Air Sampling Methods/NIOSH 6015 Ammonia.pdf',
     './doc/File Structure/Common/NIOSH Air Sampling Methods/NIOSH Method 7024.pdf',
     './doc/File Structure/Common/NIOSH Air Sampling Methods/NIOSH Method 7029.pdf',
     './doc/File Structure/Common/NIOSH Air Sampling Methods/NIOSH Method 7048.pdf',
     './doc/File Structure/Common/NIOSH Air Sampling Methods/NIOSH 7056 Barium, soluble compounds.pdf',
     './doc/File Structure/Common/NIOSH Air Sampling Methods/NIOSH 7300 Elements by ICP (Nitric and Perchloric Acid Ashing).pdf',
	 './doc/File Structure/Common/NIOSH Air Sampling Methods/NIOSH 7301.pdf',
	 './doc/File Structure/Common/NIOSH Air Sampling Methods/NIOSH 7303.pdf',
     './doc/File Structure/Common/NIOSH Air Sampling Methods/NIOSH 7400 Asbestos and Other Fibers by PCM.pdf',
	 './doc/File Structure/Common/NIOSH Air Sampling Methods/NIOSH 7401.pdf',
	 './doc/File Structure/Common/NIOSH Air Sampling Methods/NIOSH 7402.pdf',
     './doc/File Structure/Common/NIOSH Air Sampling Methods/NIOSH Method 7605.pdf',
     './doc/File Structure/Common/NIOSH Air Sampling Methods/NIOSH 7900 Arsenic and Compounds as As (Except AsH3 and As2O3).pdf',
     './doc/File Structure/Common/NIOSH Air Sampling Methods/NIOSH Method 7904.pdf',
     './doc/File Structure/Common/NIOSH Air Sampling Methods/NIOSH Method 7905.pdf',
     './doc/File Structure/Common/NIOSH Air Sampling Methods/NIOSH Method 7906.pdf',
     './doc/File Structure/Common/NIOSH Air Sampling Methods/NIOSH Method 7907.pdf',
     './doc/File Structure/Common/NIOSH Air Sampling Methods/NIOSH Method 7908.pdf',
     './doc/File Structure/Common/NIOSH Air Sampling Methods/OSHA 05 Chloroform.pdf',
     './doc/File Structure/Common/NIOSH Air Sampling Methods/OSHA 34 Dimethylamine.pdf',
     './doc/File Structure/Common/NIOSH Air Sampling Methods/OSHA 52 Acrolein (Formaldehyde).pdf',
     './doc/File Structure/Common/NIOSH Air Sampling Methods/OSHA 54 Methyl Isocyanate.pdf',
     './doc/File Structure/Common/NIOSH Air Sampling Methods/OSHA 61 Phosgene.pdf',
     './doc/File Structure/Common/NIOSH Air Sampling Methods/OSHA 89 Styrene.pdf',
     './doc/File Structure/Common/NIOSH Air Sampling Methods/OSHA Method ID-111.pdf',
     './doc/File Structure/Common/NIOSH Air Sampling Methods/OSHA 121 Metal and Metalloid Particulates.pdf',
     './doc/File Structure/Common/NIOSH Air Sampling Methods/OSHA Method ID-145.pdf',
     './doc/File Structure/Common/NIOSH Air Sampling Methods/OSHA 188 Ammonia.pdf',
     './doc/File Structure/Common/NIOSH Air Sampling Methods/OSHA Method ID-209.pdf',
	 './doc/File Structure/Common/NIOSH Air Sampling Methods/OSHA ID 212.pdf',
     './doc/File Structure/Common/NIOSH Air Sampling Methods/OSHA 1005 Benzene.pdf',
     './doc/File Structure/Common/NIOSH Air Sampling Methods/OSHA Method PV2040.pdf',
     './doc/File Structure/Common/NIOSH Air Sampling Methods/OSHA Volatile Organic Compounds in Air PV2120.pdf',
	
	
	 './doc/File Structure/Common/Chemical Data Sheets/2,3,7,8-Tetrachloro-dibenzo-p-dioxin.pdf',
     './doc/File Structure/Common/Chemical Data Sheets/2,4-D.pdf',
     './doc/File Structure/Common/Chemical Data Sheets/Acetic acid.pdf',
     './doc/File Structure/Common/Chemical Data Sheets/Ammonia.pdf',
     './doc/File Structure/Common/Chemical Data Sheets/Ammonium sulfamate.pdf',
     './doc/File Structure/Common/Chemical Data Sheets/Arsenic (inorganic compounds, as As).pdf',
     './doc/File Structure/Common/Chemical Data Sheets/Arsenic (organic compounds, as As).pdf',
     './doc/File Structure/Common/Chemical Data Sheets/Arsine.pdf',
     './doc/File Structure/Common/Chemical Data Sheets/Atrazine.pdf',
     './doc/File Structure/Common/Chemical Data Sheets/Benzene.pdf',
     './doc/File Structure/Common/Chemical Data Sheets/Cadmium dust (as Cd).pdf',
     './doc/File Structure/Common/Chemical Data Sheets/Carbaryl.pdf',
     './doc/File Structure/Common/Chemical Data Sheets/Carbon monoxide.pdf',
     './doc/File Structure/Common/Chemical Data Sheets/Chlordane.pdf',
     './doc/File Structure/Common/Chemical Data Sheets/Chlorine dioxide.pdf',
     './doc/File Structure/Common/Chemical Data Sheets/Chlorine.pdf',
     './doc/File Structure/Common/Chemical Data Sheets/Chlorodiphenyl (42 percent chlorine).pdf',
     './doc/File Structure/Common/Chemical Data Sheets/Chlorodiphenyl (54 percent chlorine).pdf',
     './doc/File Structure/Common/Chemical Data Sheets/Chromic acid and chromates.pdf',
     './doc/File Structure/Common/Chemical Data Sheets/Coal tar pitch volatiles.pdf',
     './doc/File Structure/Common/Chemical Data Sheets/Copper (dusts and mists, as Cu).pdf',
     './doc/File Structure/Common/Chemical Data Sheets/Cyclohexane.pdf',
     './doc/File Structure/Common/Chemical Data Sheets/Diesel.pdf',
     './doc/File Structure/Common/Chemical Data Sheets/Ethyl benzene.pdf',
     './doc/File Structure/Common/Chemical Data Sheets/Gasoline.pdf',
     './doc/File Structure/Common/Chemical Data Sheets/Hydrazine.pdf',
     './doc/File Structure/Common/Chemical Data Sheets/Hydrogen bromide.pdf',
     './doc/File Structure/Common/Chemical Data Sheets/Hydrogen chloride.pdf',
     './doc/File Structure/Common/Chemical Data Sheets/Hydrogen cyanide.pdf',
     './doc/File Structure/Common/Chemical Data Sheets/Hydrogen fluoride.pdf',
     './doc/File Structure/Common/Chemical Data Sheets/Hydrogen sulfide.pdf',
     './doc/File Structure/Common/Chemical Data Sheets/L.P.G..pdf',
     './doc/File Structure/Common/Chemical Data Sheets/Lead.pdf',
     './doc/File Structure/Common/Chemical Data Sheets/Malathion.pdf',
     './doc/File Structure/Common/Chemical Data Sheets/Mercury compounds.pdf',
     './doc/File Structure/Common/Chemical Data Sheets/Methyl bromide.pdf',
     './doc/File Structure/Common/Chemical Data Sheets/m-Xylene.pdf',
     './doc/File Structure/Common/Chemical Data Sheets/Naphthalene.pdf',
     './doc/File Structure/Common/Chemical Data Sheets/n-Butane.pdf',
     './doc/File Structure/Common/Chemical Data Sheets/n-Hexane.pdf',
     './doc/File Structure/Common/Chemical Data Sheets/Nickel metal and other compounds (as Ni).pdf',
     './doc/File Structure/Common/Chemical Data Sheets/Nitric acid.pdf',
     './doc/File Structure/Common/Chemical Data Sheets/Nitric oxide.pdf',
     './doc/File Structure/Common/Chemical Data Sheets/Nitrogen dioxide.pdf',
     './doc/File Structure/Common/Chemical Data Sheets/o-Xylene.pdf',
     './doc/File Structure/Common/Chemical Data Sheets/Particulates not otherwise regulated.pdf',
     './doc/File Structure/Common/Chemical Data Sheets/Phosgene.pdf',
     './doc/File Structure/Common/Chemical Data Sheets/Phosphine.pdf',
     './doc/File Structure/Common/Chemical Data Sheets/Phosphoric acid.pdf',
     './doc/File Structure/Common/Chemical Data Sheets/Phosphorus (yellow).pdf',
     './doc/File Structure/Common/Chemical Data Sheets/Phosphorus pentoxide.pdf',
     './doc/File Structure/Common/Chemical Data Sheets/Propane.pdf',
     './doc/File Structure/Common/Chemical Data Sheets/p-Xylene.pdf',
     './doc/File Structure/Common/Chemical Data Sheets/Sodium cyanide (as CN).pdf',
     './doc/File Structure/Common/Chemical Data Sheets/Sulfur dioxide.pdf',
     './doc/File Structure/Common/Chemical Data Sheets/Sulfuric acid.pdf',
     './doc/File Structure/Common/Chemical Data Sheets/Tetrachloroethylene (PCE).pdf',
     './doc/File Structure/Common/Chemical Data Sheets/Toluene.pdf',
     './doc/File Structure/Common/Chemical Data Sheets/Trichloroethylene (TCE).pdf',
     './doc/File Structure/Common/Chemical Data Sheets/Vinyl chloride.pdf',
     './doc/File Structure/Common/Chemical Data Sheets/Zinc oxide.pdf',
	 
  
     './doc/File Structure/Common/Other Reference Documents/Field XRF_EPA Method 6200.pdf',
     './doc/File Structure/Common/Other Reference Documents/Mercury ASTDR Suggested Action Levels.pdf',
     './doc/File Structure/Common/Other Reference Documents/MultiRAE, AreaRAE Technical_Note_114 Sensor Cross_Sensitivities_updated_03_26_2018.pdf',
     './doc/File Structure/Common/Other Reference Documents/MultiRAE, UltraRAE, AreaRAE Technical_Note_106_A_Guideline_for_Pid_Instrument_Response.pdf',
     './doc/File Structure/Common/Other Reference Documents/PAC Rev.29a List.pdf',
     './doc/File Structure/Common/Other Reference Documents/SPM Flex Detectable Gases.pdf',
     './doc/File Structure/Common/Other Reference Documents/Drager Tubes and Chips Tables.pdf',
     './doc/File Structure/Common/Other Reference Documents/TVA2020 FID Response factors.pdf',
     './doc/File Structure/Common/Other Reference Documents/TVA2020 PID Response factors.pdf',
     './doc/File Structure/Common/Other Reference Documents/EPA_Lead handbook.pdf',

	
	  './doc/File Structure/Common/Documents/Air_ERQASP_JMR 08262020_Draft.docx',
	  './doc/File Structure/Common/Documents/DRAFT Containers Waste Piles_QASP_072820.docx',
	  './doc/File Structure/Common/Documents/DRAFT Containers Waste Piles_DQO_072820.docx',
	  './doc/File Structure/Common/Documents/Soil-Water-Misc. Matrix_ERQASP_JMR 08242020.docx',
	  './doc/File Structure/Common/Documents/ERHASP-template-R9_START-rev2- 011720.docx',


	 './',
	 
];


self.addEventListener('install', function(event) {

  // Perform install steps
  event.waitUntil(

    caches.open(cacheName)
      .then(function(cache) {
        console.log('Opened cache');
		return cache.addAll(cacheFiles);
      })
  );
  self.skipWaiting();
});


// On version update, remove old cached files
self.addEventListener('activate', function (event) {
	console.log('[ServiceWorker] Activated');
	event.waitUntil(
			caches.keys().then(function(cacheNames) {
		return Promise.all(cacheNames.map(function(thisCacheName) {
		// If a cached item is saved under a previous cacheName
				if (thisCacheName !== cacheName) {

					// Delete that cached file
					console.log('[ServiceWorker] Removing Cached Files from Cache - ', thisCacheName);
					return caches.delete(thisCacheName);
				}
			}));
		})
	); // end e.waitUntil

});


self.addEventListener('fetch', function(event) {
	console.log('[ServiceWorker] Fetch');
    event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }

        return fetch(event.request).then(
          function(response) {
            // Check if we received a valid response
            if(!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // IMPORTANT: Clone the response. A response is a stream
            // and because we want the browser to consume the response
            // as well as the cache consuming the response, we need
            // to clone it so we have two streams.
            var responseToCache = response.clone();

            caches.open(cacheName)
              .then(function(cache) {
                cache.put(event.request, responseToCache);
              });

            return response;
          }
        );
      })
    );
});