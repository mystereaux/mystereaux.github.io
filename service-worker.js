// the cache version gets updated every time there is a new deployment
const CACHE_VERSION = 5;
const CURRENT_CACHE = `main-${CACHE_VERSION}`;
// these are the routes we are going to cache for offline support
const cacheFiles = [
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
   
   './MainPage/QuickStartGuides.html',
   './MainPage/AirMonitoringTables.html',
   './MainPage/ChemicalDataSheets.html',
   './MainPage/NIOSHAirSamplingMethods.html',
   './MainPage/FirstStepsandPreparation.html',
   './MainPage/OtherReferenceDocuments.html',
   './MainPage/AnalyticalMethodsTable.html',   
   './MainPage/TemplateDocuments(Word).html',
   './MainPage/HazCATManual.html',
   './MainPage/VIPERDocuments.html',
   
   './index.html',

     './doc/FileStructure/Common/VIPERDocuments/MANUAL VIPER User Guide.pdf',
     './doc/FileStructure/Common/VIPERDocuments/Viper- ProRae Guardian Setup.pdf',
     './doc/FileStructure/Common/VIPERDocuments/Viper- SmartGateway 2020.pdf',

   './doc/FileStructure/Common/Emergency_Response_Checklist.pdf',
   './doc/FileStructure/Common/Pre-Mob_and_On-Site_Decision_Tree.pdf',
   './doc/FileStructure/Common/QuickStartGuides/QSG AreaRAE Pro and AreaRAE Plus.pdf',
   './doc/FileStructure/Common/QuickStartGuides/QSG DustTrak 8533.pdf',
   './doc/FileStructure/Common/QuickStartGuides/QSG DustTrak 8534.pdf',
   './doc/FileStructure/Common/QuickStartGuides/QSG Gilian-GilAir-Plus.pdf',
     './doc/FileStructure/Common/QuickStartGuides/QSG Defender Drycal.pdf',
     './doc/FileStructure/Common/QuickStartGuides/QSG  HazMat ID.pdf',
     './doc/FileStructure/Common/QuickStartGuides/EOG Ludlum 19 Micro R.pdf',
     './doc/FileStructure/Common/QuickStartGuides/QSG Lumex 915M.pdf',
     './doc/FileStructure/Common/QuickStartGuides/QSG Lumex 915Plus.pdf',
     './doc/FileStructure/Common/QuickStartGuides/EOG MultiRAE PRO.pdf',
     './doc/FileStructure/Common/QuickStartGuides/QSG PDR-1000.pdf',
     './doc/FileStructure/Common/QuickStartGuides/MANUAL pDR 1500.pdf',
     './doc/FileStructure/Common/QuickStartGuides/QSG SKC AirChek TOUCH.pdf',
     './doc/FileStructure/Common/QuickStartGuides/QSG SPM Flex.pdf',
     './doc/FileStructure/Common/QuickStartGuides/QSG TVA 2020.pdf',
     './doc/FileStructure/Common/QuickStartGuides/QSG GilAir-5 Sampler Pump v2.0.pdf',
     './doc/FileStructure/Common/QuickStartGuides/QSG Ludlum 2241 v2.0.pdf',
     './doc/FileStructure/Common/QuickStartGuides/QSG Level A Suit v2.0.pdf',
     './doc/FileStructure/Common/QuickStartGuides/QSG Scott SCBA PAPR.pdf',
     './doc/FileStructure/Common/QuickStartGuides/QSG Quick Take 30 v1.1.pdf',
     './doc/FileStructure/Common/QuickStartGuides/QSG Scott SCBA v2.0.pdf',
     './doc/FileStructure/Common/QuickStartGuides/QSG TVA-1000B v2.0.pdf',
     './doc/FileStructure/Common/QuickStartGuides/QSG Summa v1.1.pdf',
     './doc/FileStructure/Common/QuickStartGuides/QSG TerraSync Data Collection Procedure v 2.0.pdf',
     './doc/FileStructure/Common/QuickStartGuides/QSG AP2Ce & AP4C v2.0.pdf',
     './doc/FileStructure/Common/QuickStartGuides/QSG Drager CMS v2.0.pdf',
     './doc/FileStructure/Common/QuickStartGuides/QSG Jerome J505 v1.pdf',
     './doc/FileStructure/Common/QuickStartGuides/QSG SAM 935 v2.0.pdf',
     './doc/FileStructure/Common/QuickStartGuides/QSG SAM 940 v2.0.pdf',
     './doc/FileStructure/Common/QuickStartGuides/QSG Trimble GeoXH v 2.0.pdf',
     './doc/FileStructure/Common/QuickStartGuides/QSG UltraRAE_3000 v 2.0.pdf',
     './doc/FileStructure/Common/QuickStartGuides/QSG Gemini FTIR and RAMAN_Modified_02232021.pdf',

	
	 './doc/FileStructure/Common/NIOSHAirSamplingMethods/EPA Method TO-4A.pdf',
     './doc/FileStructure/Common/NIOSHAirSamplingMethods/EPA TO-9A.pdf',
     './doc/FileStructure/Common/NIOSHAirSamplingMethods/EPA TO-10A.pdf',
     './doc/FileStructure/Common/NIOSHAirSamplingMethods/EPA Method TO-13A.pdf',
     './doc/FileStructure/Common/NIOSHAirSamplingMethods/EPA Method TO-15.pdf',
     './doc/FileStructure/Common/NIOSHAirSamplingMethods/EPA Method TO-17.pdf',
	 './doc/FileStructure/Common/NIOSHAirSamplingMethods/NIOSH Method 0500.pdf',
     './doc/FileStructure/Common/NIOSHAirSamplingMethods/NIOSH 1003 Hydrocarbons Halogenated.pdf',
     './doc/FileStructure/Common/NIOSHAirSamplingMethods/NIOSH 1005 Methylene Chloride.pdf',
     './doc/FileStructure/Common/NIOSHAirSamplingMethods/NIOSH 1007 Vinyl Chloride.pdf',
     './doc/FileStructure/Common/NIOSHAirSamplingMethods/NIOSH 1016.pdf',
     './doc/FileStructure/Common/NIOSHAirSamplingMethods/NIOSH 1020 1,1,2-Trichloro-1,2,2-Trifluoroethane.pdf',
     './doc/FileStructure/Common/NIOSHAirSamplingMethods/NIOSH 1022 Trichloroethylene.pdf',
     './doc/FileStructure/Common/NIOSHAirSamplingMethods/NIOSH 1024.pdf',
	 
	 './doc/FileStructure/Common/NIOSHAirSamplingMethods/NIOSH 1300.pdf',
     './doc/FileStructure/Common/NIOSHAirSamplingMethods/NIOSH 1400 Alcohols.pdf',
     './doc/FileStructure/Common/NIOSHAirSamplingMethods/NIOSH Method 1459.pdf',
     './doc/FileStructure/Common/NIOSHAirSamplingMethods/NIOSH 1500 Hydrocarbons, BP 36-216 C.pdf',
     './doc/FileStructure/Common/NIOSHAirSamplingMethods/NIOSH 1501 Hydrocarbons, Aromatic.pdf',
     './doc/FileStructure/Common/NIOSHAirSamplingMethods/NIOSH 1550 Naphthas.pdf',
     './doc/FileStructure/Common/NIOSHAirSamplingMethods/NIOSH 1603 Acetic Acid.pdf',
     './doc/FileStructure/Common/NIOSHAirSamplingMethods/NIOSH 1604.pdf',
	 './doc/FileStructure/Common/NIOSHAirSamplingMethods/NIOSH 1610.pdf',
	 './doc/FileStructure/Common/NIOSHAirSamplingMethods/NIOSH 2000.pdf',
	 './doc/FileStructure/Common/NIOSHAirSamplingMethods/NIOSH 2016.pdf',
	 './doc/FileStructure/Common/NIOSHAirSamplingMethods/NIOSH 2500.pdf',
	 './doc/FileStructure/Common/NIOSHAirSamplingMethods/NIOSH 2538.pdf',
     './doc/FileStructure/Common/NIOSHAirSamplingMethods/NIOSH 2542 Mercaptans, Methyl-, Ethyl-, and n-Butyl.pdf',
     './doc/FileStructure/Common/NIOSHAirSamplingMethods/NIOSH Method 2552.pdf',
     './doc/FileStructure/Common/NIOSHAirSamplingMethods/NIOSH 3503.pdf',
     './doc/FileStructure/Common/NIOSHAirSamplingMethods/NIOSH 5022.pdf',
     './doc/FileStructure/Common/NIOSHAirSamplingMethods/NIOSH Method 5023.pdf',
     './doc/FileStructure/Common/NIOSHAirSamplingMethods/NIOSH Method 5503.pdf',
     './doc/FileStructure/Common/NIOSHAirSamplingMethods/NIOSH Method 5506.pdf',
	 './doc/FileStructure/Common/NIOSHAirSamplingMethods/NIOSH 5510.pdf',
	 './doc/FileStructure/Common/NIOSHAirSamplingMethods/NIOSH 5512.pdf',
     './doc/FileStructure/Common/NIOSHAirSamplingMethods/NIOSH 6001 Arsine.pdf',
     './doc/FileStructure/Common/NIOSHAirSamplingMethods/NIOSH Method 6002.pdf',
     './doc/FileStructure/Common/NIOSHAirSamplingMethods/NIOSH Method 6004.pdf',
	 './doc/FileStructure/Common/NIOSHAirSamplingMethods/NIOSH 6005.pdf',
     './doc/FileStructure/Common/NIOSHAirSamplingMethods/NIOSH 6009 Mercury.pdf',
     './doc/FileStructure/Common/NIOSHAirSamplingMethods/NIOSH 6010 Hydrogen Cyanide.pdf',
     './doc/FileStructure/Common/NIOSHAirSamplingMethods/NIOSH Method 6011.pdf',
     './doc/FileStructure/Common/NIOSHAirSamplingMethods/NIOSH Method 6014.pdf',
     './doc/FileStructure/Common/NIOSHAirSamplingMethods/NIOSH 6015 Ammonia.pdf',
     './doc/FileStructure/Common/NIOSHAirSamplingMethods/NIOSH 6600.pdf',
     './doc/FileStructure/Common/NIOSHAirSamplingMethods/NIOSH Method 7024.pdf',
     './doc/FileStructure/Common/NIOSHAirSamplingMethods/NIOSH Method 7029.pdf',
     './doc/FileStructure/Common/NIOSHAirSamplingMethods/NIOSH Method 7048.pdf',
     './doc/FileStructure/Common/NIOSHAirSamplingMethods/NIOSH 7056 Barium, soluble compounds.pdf',
     './doc/FileStructure/Common/NIOSHAirSamplingMethods/NIOSH 7300 Elements by ICP (Nitric and Perchloric Acid Ashing).pdf',
	 './doc/FileStructure/Common/NIOSHAirSamplingMethods/NIOSH 7301.pdf',
	 './doc/FileStructure/Common/NIOSHAirSamplingMethods/NIOSH 7303.pdf',
     './doc/FileStructure/Common/NIOSHAirSamplingMethods/NIOSH 7400 Asbestos and Other Fibers by PCM.pdf',
	 './doc/FileStructure/Common/NIOSHAirSamplingMethods/NIOSH 7401.pdf',
	 './doc/FileStructure/Common/NIOSHAirSamplingMethods/NIOSH 7402.pdf',
     './doc/FileStructure/Common/NIOSHAirSamplingMethods/NIOSH Method 7605.pdf',
     './doc/FileStructure/Common/NIOSHAirSamplingMethods/NIOSH 7900 Arsenic and Compounds as As (Except AsH3 and As2O3).pdf',
     './doc/FileStructure/Common/NIOSHAirSamplingMethods/NIOSH Method 7904.pdf',
     './doc/FileStructure/Common/NIOSHAirSamplingMethods/NIOSH Method 7905.pdf',
     './doc/FileStructure/Common/NIOSHAirSamplingMethods/NIOSH Method 7906.pdf',
     './doc/FileStructure/Common/NIOSHAirSamplingMethods/NIOSH Method 7907.pdf',
     './doc/FileStructure/Common/NIOSHAirSamplingMethods/NIOSH Method 7908.pdf',
     './doc/FileStructure/Common/NIOSHAirSamplingMethods/OSHA 05 Chloroform.pdf',
     './doc/FileStructure/Common/NIOSHAirSamplingMethods/OSHA 34 Dimethylamine.pdf',
     './doc/FileStructure/Common/NIOSHAirSamplingMethods/OSHA 52 Acrolein (Formaldehyde).pdf',
     './doc/FileStructure/Common/NIOSHAirSamplingMethods/OSHA 54 Methyl Isocyanate.pdf',
     './doc/FileStructure/Common/NIOSHAirSamplingMethods/OSHA 56.pdf',
     './doc/FileStructure/Common/NIOSHAirSamplingMethods/OSHA 61 Phosgene.pdf',
     './doc/FileStructure/Common/NIOSHAirSamplingMethods/OSHA 89 Styrene.pdf',
     './doc/FileStructure/Common/NIOSHAirSamplingMethods/OSHA Method ID-111.pdf',
     './doc/FileStructure/Common/NIOSHAirSamplingMethods/OSHA 121 Metal and Metalloid Particulates.pdf',
     './doc/FileStructure/Common/NIOSHAirSamplingMethods/OSHA Method ID-145.pdf',
     './doc/FileStructure/Common/NIOSHAirSamplingMethods/OSHA 188 Ammonia.pdf',
     './doc/FileStructure/Common/NIOSHAirSamplingMethods/OSHA Method ID-209.pdf',
	 './doc/FileStructure/Common/NIOSHAirSamplingMethods/OSHA ID 212.pdf',
     './doc/FileStructure/Common/NIOSHAirSamplingMethods/OSHA 1005 Benzene.pdf',
     './doc/FileStructure/Common/NIOSHAirSamplingMethods/OSHA 1008.pdf',
     './doc/FileStructure/Common/NIOSHAirSamplingMethods/OSHA 1019.pdf',
     './doc/FileStructure/Common/NIOSHAirSamplingMethods/OSHA PV2010.pdf',
     './doc/FileStructure/Common/NIOSHAirSamplingMethods/OSHA Method PV2040.pdf',
     './doc/FileStructure/Common/NIOSHAirSamplingMethods/OSHA PV2077.pdf',
     './doc/FileStructure/Common/NIOSHAirSamplingMethods/OSHA Volatile Organic Compounds in Air PV2120.pdf',
		
	 './doc/FileStructure/Common/ChemicalDataSheets/2,3,7,8-Tetrachloro-dibenzo-p-dioxin.pdf',
     './doc/FileStructure/Common/ChemicalDataSheets/2,4-D.pdf',
     './doc/FileStructure/Common/ChemicalDataSheets/Acetic acid.pdf',
     './doc/FileStructure/Common/ChemicalDataSheets/Ammonia.pdf',
     './doc/FileStructure/Common/ChemicalDataSheets/Ammonium sulfamate.pdf',
     './doc/FileStructure/Common/ChemicalDataSheets/Arsenic (inorganic compounds, as As).pdf',
     './doc/FileStructure/Common/ChemicalDataSheets/Arsenic (organic compounds, as As).pdf',
     './doc/FileStructure/Common/ChemicalDataSheets/Arsine.pdf',
     './doc/FileStructure/Common/ChemicalDataSheets/Atrazine.pdf',
     './doc/FileStructure/Common/ChemicalDataSheets/Benzene.pdf',
     './doc/FileStructure/Common/ChemicalDataSheets/Cadmium dust (as Cd).pdf',
     './doc/FileStructure/Common/ChemicalDataSheets/Carbaryl.pdf',
     './doc/FileStructure/Common/ChemicalDataSheets/Carbon monoxide.pdf',
     './doc/FileStructure/Common/ChemicalDataSheets/Chlordane.pdf',
     './doc/FileStructure/Common/ChemicalDataSheets/Chlorine dioxide.pdf',
     './doc/FileStructure/Common/ChemicalDataSheets/Chlorine.pdf',
     './doc/FileStructure/Common/ChemicalDataSheets/Chlorodiphenyl (42 percent chlorine).pdf',
     './doc/FileStructure/Common/ChemicalDataSheets/Chlorodiphenyl (54 percent chlorine).pdf',
     './doc/FileStructure/Common/ChemicalDataSheets/Chromic acid and chromates.pdf',
     './doc/FileStructure/Common/ChemicalDataSheets/Coal tar pitch volatiles.pdf',
     './doc/FileStructure/Common/ChemicalDataSheets/Copper (dusts and mists, as Cu).pdf',
     './doc/FileStructure/Common/ChemicalDataSheets/Cyclohexane.pdf',
     './doc/FileStructure/Common/ChemicalDataSheets/Diesel.pdf',
     './doc/FileStructure/Common/ChemicalDataSheets/Ethyl benzene.pdf',
     './doc/FileStructure/Common/ChemicalDataSheets/Gasoline.pdf',
     './doc/FileStructure/Common/ChemicalDataSheets/Hydrazine.pdf',
     './doc/FileStructure/Common/ChemicalDataSheets/Hydrogen bromide.pdf',
     './doc/FileStructure/Common/ChemicalDataSheets/Hydrogen chloride.pdf',
     './doc/FileStructure/Common/ChemicalDataSheets/Hydrogen cyanide.pdf',
     './doc/FileStructure/Common/ChemicalDataSheets/Hydrogen fluoride.pdf',
     './doc/FileStructure/Common/ChemicalDataSheets/Hydrogen sulfide.pdf',
     './doc/FileStructure/Common/ChemicalDataSheets/L.P.G..pdf',
     './doc/FileStructure/Common/ChemicalDataSheets/Lead.pdf',
     './doc/FileStructure/Common/ChemicalDataSheets/Malathion.pdf',
     './doc/FileStructure/Common/ChemicalDataSheets/Mercury compounds.pdf',
     './doc/FileStructure/Common/ChemicalDataSheets/Methyl bromide.pdf',
     './doc/FileStructure/Common/ChemicalDataSheets/m-Xylene.pdf',
     './doc/FileStructure/Common/ChemicalDataSheets/Naphthalene.pdf',
     './doc/FileStructure/Common/ChemicalDataSheets/n-Butane.pdf',
     './doc/FileStructure/Common/ChemicalDataSheets/n-Hexane.pdf',
     './doc/FileStructure/Common/ChemicalDataSheets/Nickel metal and other compounds (as Ni).pdf',
     './doc/FileStructure/Common/ChemicalDataSheets/Nitric acid.pdf',
     './doc/FileStructure/Common/ChemicalDataSheets/Nitric oxide.pdf',
     './doc/FileStructure/Common/ChemicalDataSheets/Nitrogen dioxide.pdf',
     './doc/FileStructure/Common/ChemicalDataSheets/o-Xylene.pdf',
     './doc/FileStructure/Common/ChemicalDataSheets/Particulates not otherwise regulated.pdf',
     './doc/FileStructure/Common/ChemicalDataSheets/Phosgene.pdf',
     './doc/FileStructure/Common/ChemicalDataSheets/Phosphine.pdf',
     './doc/FileStructure/Common/ChemicalDataSheets/Phosphoric acid.pdf',
     './doc/FileStructure/Common/ChemicalDataSheets/Phosphorus (yellow).pdf',
     './doc/FileStructure/Common/ChemicalDataSheets/Phosphorus pentoxide.pdf',
     './doc/FileStructure/Common/ChemicalDataSheets/Propane.pdf',
     './doc/FileStructure/Common/ChemicalDataSheets/p-Xylene.pdf',
     './doc/FileStructure/Common/ChemicalDataSheets/Sodium cyanide (as CN).pdf',
     './doc/FileStructure/Common/ChemicalDataSheets/Sulfur dioxide.pdf',
     './doc/FileStructure/Common/ChemicalDataSheets/Sulfuric acid.pdf',
     './doc/FileStructure/Common/ChemicalDataSheets/Tetrachloroethylene (PCE).pdf',
     './doc/FileStructure/Common/ChemicalDataSheets/Toluene.pdf',
     './doc/FileStructure/Common/ChemicalDataSheets/Trichloroethylene (TCE).pdf',
     './doc/FileStructure/Common/ChemicalDataSheets/Vinyl chloride.pdf',
     './doc/FileStructure/Common/ChemicalDataSheets/Zinc oxide.pdf',
		
	 
  
     './doc/FileStructure/Common/OtherReferenceDocuments/Field XRF_EPA Method 6200.pdf',
     './doc/FileStructure/Common/OtherReferenceDocuments/Mercury ASTDR Suggested Action Levels.pdf',
     './doc/FileStructure/Common/OtherReferenceDocuments/sps-his-tn-106a-arearae-pluspro.pdf',
     './doc/FileStructure/Common/OtherReferenceDocuments/sps-his-tn-106b-multirae-series.pdf',
     './doc/FileStructure/Common/OtherReferenceDocuments/MultiRAE, AreaRAE Technical_Note_114 Sensor Cross_Sensitivities_updated_03_26_2018.pdf',
     './doc/FileStructure/Common/OtherReferenceDocuments/PAC Rev.29a List.pdf',
     './doc/FileStructure/Common/OtherReferenceDocuments/SPM Flex Detectable Gases.pdf',
     './doc/FileStructure/Common/OtherReferenceDocuments/Drager Tubes and Chips Tables.pdf',
     './doc/FileStructure/Common/OtherReferenceDocuments/TVA2020 FID Response factors.pdf',
     './doc/FileStructure/Common/OtherReferenceDocuments/TVA2020 PID Response factors.pdf',
     './doc/FileStructure/Common/OtherReferenceDocuments/EPA_Lead handbook.pdf',
     './doc/FileStructure/Common/OtherReferenceDocuments/Cross sensitivities CatEx 125 PR_NIOSH_220415.pdf',
	 './doc/FileStructure/Common/OtherReferenceDocuments/tn156.pdf',
	 './doc/FileStructure/Common/OtherReferenceDocuments/Marijuana Pesticides Fact Sheet.pdf',
	  

	 

	 './doc/FileStructure/Common/ResponseSpecificFiles/0.6ERHASPs/Region 9 Consolidated HASP Template.docx',
	 './doc/FileStructure/Common/ResponseSpecificFiles/0.6ERHASPs/Revised OSC Emergency Response HASP.docx',
	 './doc/FileStructure/Common/ResponseSpecificFiles/0.6ERHASPs/ERHASP-template-R9_START-rev2- 011720.doc',
	 './doc/FileStructure/Common/ResponseSpecificFiles/0.7ERQASPs/Air_ERQASP_Fillable.docx',
	 './doc/FileStructure/Common/ResponseSpecificFiles/0.7ERQASPs/Containers Waste Piles_ERQASP_Fillable.docx',
	 './doc/FileStructure/Common/ResponseSpecificFiles/0.7ERQASPs/Electroplating_ERQASP_Fillable.docx',
	 './doc/FileStructure/Common/ResponseSpecificFiles/0.7ERQASPs/Mercury_ERQASP_Fillable.docx',
	 './doc/FileStructure/Common/ResponseSpecificFiles/0.7ERQASPs/Soil-Water-Misc._Matrix_ERQASP_Fillable.docx',
	 './doc/FileStructure/Common/ResponseSpecificFiles/0.7ERQASPs/DQOs/Air DQO.docx',
	 './doc/FileStructure/Common/ResponseSpecificFiles/0.7ERQASPs/DQOs/Containers Waste Piles DQO.docx',
	 './doc/FileStructure/Common/ResponseSpecificFiles/0.7ERQASPs/DQOs/Mercury_DQO.docx',
	 './doc/FileStructure/Common/ResponseSpecificFiles/0.7ERQASPs/DQOs/Soil DQO.docx',
	 './doc/FileStructure/Common/ResponseSpecificFiles/0.7ERQASPs/DQOs/Water DQO.docx',
	 './doc/FileStructure/Common/ResponseSpecificFiles/0.8SSDMPs/R9_SSDMP.docm',
	 './doc/FileStructure/Common/ResponseSpecificFiles/0.9CAMP/TEMPLATE Comm Air Mon Plan.docx',
	 './',

];
// on activation we clean up the previously registered service workers


self.addEventListener('activate', evt =>{
  evt.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CURRENT_CACHE) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  )
});

// on install we download the routes we want to cache for offline
self.addEventListener('install', evt => {

    evt.waitUntil(

    caches.open(CURRENT_CACHE)
      .then(function(cache) {
        console.log('Opened cache');
		return cache.addAll(cacheFiles);
		})
	  
  );
});


// fetch the resource from the network
const fromNetwork = (request, timeout) =>
  new Promise((fulfill, reject) => {
    const timeoutId = setTimeout(reject, timeout);
    fetch(request).then(response => {
      clearTimeout(timeoutId);
      fulfill(response);
      update(request);
    }, reject);
  });

// fetch the resource from the browser cache
const fromCache = request =>
  caches
    .open(CURRENT_CACHE)
    .then(cache =>
      cache
        .match(request)
        .then(matching => matching || cache.match('/offline/'))
    );

// cache the current page to make it available for offline
const update = request =>
  caches
    .open(CURRENT_CACHE)
    .then(cache =>
      fetch(request).then(response => cache.put(request, response))
    );

// general strategy when making a request (eg if online try to fetch it
// from the network with a timeout, if something fails serve from cache)
self.addEventListener('fetch', evt => {
  evt.respondWith(
    fromNetwork(evt.request, 10000).catch(() => fromCache(evt.request))
  );
  evt.waitUntil(update(evt.request));
});