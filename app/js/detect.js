;(function (e) {
	Array.prototype.map ||
		(Array.prototype.map = function (e, r) {
			var a, o, i
			if (null == this) throw new TypeError(' this is null or not defined')
			var n = Object(this),
				t = n.length >>> 0
			if ('function' != typeof e) throw new TypeError(e + ' is not a function')
			for (r && (a = r), o = Array(t), i = 0; t > i; ) {
				var l, d
				i in n && ((l = n[i]), (d = e.call(a, l, i, n)), (o[i] = d)), i++
			}
			return o
		})
	var r = (e.detect = (function () {
		var e = function () {},
			r = {
				browser_parsers: [
					{ regex: '^(Opera)/(\\d+)\\.(\\d+) \\(Nintendo Wii', family_replacement: 'Wii', manufacturer: 'Nintendo' },
					{ regex: '(SeaMonkey|Camino)/(\\d+)\\.(\\d+)\\.?([ab]?\\d+[a-z]*)', family_replacement: 'Camino', other: !0 },
					{ regex: '(Pale[Mm]oon)/(\\d+)\\.(\\d+)\\.?(\\d+)?', family_replacement: 'Pale Moon (Firefox Variant)', other: !0 },
					{ regex: '(Fennec)/(\\d+)\\.(\\d+)\\.?([ab]?\\d+[a-z]*)', family_replacement: 'Firefox Mobile' },
					{ regex: '(Fennec)/(\\d+)\\.(\\d+)(pre)', family_replacment: 'Firefox Mobile' },
					{ regex: '(Fennec)/(\\d+)\\.(\\d+)', family_replacement: 'Firefox Mobile' },
					{ regex: 'Mobile.*(Firefox)/(\\d+)\\.(\\d+)', family_replacement: 'Firefox Mobile' },
					{ regex: '(Namoroka|Shiretoko|Minefield)/(\\d+)\\.(\\d+)\\.(\\d+(?:pre)?)', family_replacement: 'Firefox ($1)' },
					{ regex: '(Firefox)/(\\d+)\\.(\\d+)(a\\d+[a-z]*)', family_replacement: 'Firefox Alpha' },
					{ regex: '(Firefox)/(\\d+)\\.(\\d+)(b\\d+[a-z]*)', family_replacement: 'Firefox Beta' },
					{ regex: '(Firefox)-(?:\\d+\\.\\d+)?/(\\d+)\\.(\\d+)(a\\d+[a-z]*)', family_replacement: 'Firefox Alpha' },
					{ regex: '(Firefox)-(?:\\d+\\.\\d+)?/(\\d+)\\.(\\d+)(b\\d+[a-z]*)', family_replacement: 'Firefox Beta' },
					{ regex: '(Namoroka|Shiretoko|Minefield)/(\\d+)\\.(\\d+)([ab]\\d+[a-z]*)?', family_replacement: 'Firefox ($1)' },
					{ regex: '(Firefox).*Tablet browser (\\d+)\\.(\\d+)\\.(\\d+)', family_replacement: 'MicroB', tablet: !0 },
					{ regex: '(MozillaDeveloperPreview)/(\\d+)\\.(\\d+)([ab]\\d+[a-z]*)?' },
					{ regex: '(Flock)/(\\d+)\\.(\\d+)(b\\d+?)', family_replacement: 'Flock', other: !0 },
					{ regex: '(RockMelt)/(\\d+)\\.(\\d+)\\.(\\d+)', family_replacement: 'Rockmelt', other: !0 },
					{ regex: '(Navigator)/(\\d+)\\.(\\d+)\\.(\\d+)', family_replacement: 'Netscape' },
					{ regex: '(Navigator)/(\\d+)\\.(\\d+)([ab]\\d+)', family_replacement: 'Netscape' },
					{ regex: '(Netscape6)/(\\d+)\\.(\\d+)\\.(\\d+)', family_replacement: 'Netscape' },
					{ regex: '(MyIBrow)/(\\d+)\\.(\\d+)', family_replacement: 'My Internet Browser', other: !0 },
					{ regex: '(Opera Tablet).*Version/(\\d+)\\.(\\d+)(?:\\.(\\d+))?', family_replacement: 'Opera Tablet', tablet: !0 },
					{ regex: '(Opera)/.+Opera Mobi.+Version/(\\d+)\\.(\\d+)', family_replacement: 'Opera Mobile' },
					{ regex: 'Opera Mobi', family_replacement: 'Opera Mobile' },
					{ regex: '(Opera Mini)/(\\d+)\\.(\\d+)', family_replacement: 'Opera Mini' },
					{ regex: '(Opera Mini)/att/(\\d+)\\.(\\d+)', family_replacement: 'Opera Mini' },
					{ regex: '(Opera)/9.80.*Version/(\\d+)\\.(\\d+)(?:\\.(\\d+))?', family_replacement: 'Opera' },
					{ regex: '(OPR)/(\\d+)\\.(\\d+)(?:\\.(\\d+))?', family_replacement: 'Opera' },
					{ regex: '(webOSBrowser)/(\\d+)\\.(\\d+)', family_replacement: 'webOS' },
					{ regex: '(webOS)/(\\d+)\\.(\\d+)', family_replacement: 'webOS' },
					{ regex: '(wOSBrowser).+TouchPad/(\\d+)\\.(\\d+)', family_replacement: 'webOS TouchPad' },
					{ regex: '(luakit)', family_replacement: 'LuaKit', other: !0 },
					{ regex: '(Lightning)/(\\d+)\\.(\\d+)([ab]?\\d+[a-z]*)', family_replacement: 'Lightning', other: !0 },
					{ regex: '(Firefox)/(\\d+)\\.(\\d+)\\.(\\d+(?:pre)?) \\(Swiftfox\\)', family_replacement: 'Swiftfox', other: !0 },
					{ regex: '(Firefox)/(\\d+)\\.(\\d+)([ab]\\d+[a-z]*)? \\(Swiftfox\\)', family_replacement: 'Swiftfox', other: !0 },
					{ regex: 'rekonq', family_replacement: 'Rekonq', other: !0 },
					{ regex: '(conkeror|Conkeror)/(\\d+)\\.(\\d+)\\.?(\\d+)?', family_replacement: 'Conkeror', other: !0 },
					{ regex: '(konqueror)/(\\d+)\\.(\\d+)\\.(\\d+)', family_replacement: 'Konqueror', other: !0 },
					{ regex: '(WeTab)-Browser', family_replacement: 'WeTab', other: !0 },
					{ regex: '(Comodo_Dragon)/(\\d+)\\.(\\d+)\\.(\\d+)', family_replacement: 'Comodo Dragon', other: !0 },
					{ regex: '(YottaaMonitor)', family_replacement: 'Yottaa Monitor', other: !0 },
					{ regex: '(Kindle)/(\\d+)\\.(\\d+)', family_replacement: 'Kindle' },
					{ regex: '(Symphony) (\\d+).(\\d+)', family_replacement: 'Symphony', other: !0 },
					{ regex: 'Minimo', family_replacement: 'Minimo', other: !0 },
					{ regex: '(Edge)/(\\d+)\\.(\\d+)', family_replacement: 'Edge' },
					{ regex: '(CrMo)/(\\d+)\\.(\\d+)\\.(\\d+)\\.(\\d+)', family_replacement: 'Chrome Mobile' },
					{ regex: '(CriOS)/(\\d+)\\.(\\d+)\\.(\\d+)\\.(\\d+)', family_replacement: 'Chrome Mobile iOS' },
					{ regex: '(Chrome)/(\\d+)\\.(\\d+)\\.(\\d+)\\.(\\d+) Mobile', family_replacement: 'Chrome Mobile' },
					{ regex: '(chromeframe)/(\\d+)\\.(\\d+)\\.(\\d+)', family_replacement: 'Chrome Frame' },
					{ regex: '(UC Browser)(\\d+)\\.(\\d+)\\.(\\d+)', family_replacement: 'UC Browser', other: !0 },
					{ regex: '(SLP Browser)/(\\d+)\\.(\\d+)', family_replacement: 'Tizen Browser', other: !0 },
					{ regex: '(Epiphany)/(\\d+)\\.(\\d+).(\\d+)', family_replacement: 'Epiphany', other: !0 },
					{ regex: '(SE 2\\.X) MetaSr (\\d+)\\.(\\d+)', family_replacement: 'Sogou Explorer', other: !0 },
					{ regex: '(Pingdom.com_bot_version_)(\\d+)\\.(\\d+)', family_replacement: 'PingdomBot', other: !0 },
					{ regex: '(facebookexternalhit)/(\\d+)\\.(\\d+)', family_replacement: 'FacebookBot' },
					{ regex: '(Twitterbot)/(\\d+)\\.(\\d+)', family_replacement: 'TwitterBot' },
					{
						regex: '(AdobeAIR|Chromium|FireWeb|Jasmine|ANTGalio|Midori|Fresco|Lobo|PaleMoon|Maxthon|Lynx|OmniWeb|Dillo|Camino|Demeter|Fluid|Fennec|Shiira|Sunrise|Chrome|Flock|Netscape|Lunascape|WebPilot|NetFront|Netfront|Konqueror|SeaMonkey|Kazehakase|Vienna|Iceape|Iceweasel|IceWeasel|Iron|K-Meleon|Sleipnir|Galeon|GranParadiso|Opera Mini|iCab|NetNewsWire|ThunderBrowse|Iron|Iris|UP\\.Browser|Bunjaloo|Google Earth|Raven for Mac)/(\\d+)\\.(\\d+)\\.(\\d+)',
					},
					{
						regex: '(Bolt|Jasmine|IceCat|Skyfire|Midori|Maxthon|Lynx|Arora|IBrowse|Dillo|Camino|Shiira|Fennec|Phoenix|Chrome|Flock|Netscape|Lunascape|Epiphany|WebPilot|Opera Mini|Opera|NetFront|Netfront|Konqueror|Googlebot|SeaMonkey|Kazehakase|Vienna|Iceape|Iceweasel|IceWeasel|Iron|K-Meleon|Sleipnir|Galeon|GranParadiso|iCab|NetNewsWire|Iron|Space Bison|Stainless|Orca|Dolfin|BOLT|Minimo|Tizen Browser|Polaris)/(\\d+)\\.(\\d+)',
					},
					{ regex: '(iRider|Crazy Browser|SkipStone|iCab|Lunascape|Sleipnir|Maemo Browser) (\\d+)\\.(\\d+)\\.(\\d+)' },
					{ regex: '(iCab|Lunascape|Opera|Android|Jasmine|Polaris|BREW) (\\d+)\\.(\\d+)\\.?(\\d+)?' },
					{ regex: '(Android) Donut', v2_replacement: '2', v1_replacement: '1' },
					{ regex: '(Android) Eclair', v2_replacement: '1', v1_replacement: '2' },
					{ regex: '(Android) Froyo', v2_replacement: '2', v1_replacement: '2' },
					{ regex: '(Android) Gingerbread', v2_replacement: '3', v1_replacement: '2' },
					{ regex: '(Android) Honeycomb', v1_replacement: '3' },
					{ regex: '(IEMobile)[ /](\\d+)\\.(\\d+)', family_replacement: 'IE Mobile' },
					{ regex: '(MSIE) (\\d+)\\.(\\d+).*XBLWP7', family_replacement: 'IE Large Screen' },
					{ regex: '(Firefox)/(\\d+)\\.(\\d+)\\.(\\d+)' },
					{ regex: '(Firefox)/(\\d+)\\.(\\d+)(pre|[ab]\\d+[a-z]*)?' },
					{ regex: '(Obigo)InternetBrowser', other: !0 },
					{ regex: '(Obigo)\\-Browser', other: !0 },
					{ regex: '(Obigo|OBIGO)[^\\d]*(\\d+)(?:.(\\d+))?', other: !0 },
					{ regex: '(MAXTHON|Maxthon) (\\d+)\\.(\\d+)', family_replacement: 'Maxthon', other: !0 },
					{ regex: '(Maxthon|MyIE2|Uzbl|Shiira)', v1_replacement: '0', other: !0 },
					{ regex: '(PLAYSTATION) (\\d+)', family_replacement: 'PlayStation', manufacturer: 'Sony' },
					{ regex: '(PlayStation Portable)[^\\d]+(\\d+).(\\d+)', manufacturer: 'Sony' },
					{ regex: '(BrowseX) \\((\\d+)\\.(\\d+)\\.(\\d+)', other: !0 },
					{ regex: '(POLARIS)/(\\d+)\\.(\\d+)', family_replacement: 'Polaris', other: !0 },
					{ regex: '(Embider)/(\\d+)\\.(\\d+)', family_replacement: 'Polaris', other: !0 },
					{ regex: '(BonEcho)/(\\d+)\\.(\\d+)\\.(\\d+)', family_replacement: 'Bon Echo', other: !0 },
					{ regex: '(iPod).+Version/(\\d+)\\.(\\d+)\\.(\\d+)', family_replacement: 'Mobile Safari', manufacturer: 'Apple' },
					{ regex: '(iPod).*Version/(\\d+)\\.(\\d+)', family_replacement: 'Mobile Safari', manufacturer: 'Apple' },
					{ regex: '(iPod)', family_replacement: 'Mobile Safari', manufacturer: 'Apple' },
					{ regex: '(iPhone).*Version/(\\d+)\\.(\\d+)\\.(\\d+)', family_replacement: 'Mobile Safari', manufacturer: 'Apple' },
					{ regex: '(iPhone).*Version/(\\d+)\\.(\\d+)', family_replacement: 'Mobile Safari', manufacturer: 'Apple' },
					{ regex: '(iPhone)', family_replacement: 'Mobile Safari', manufacturer: 'Apple' },
					{ regex: '(iPad).*Version/(\\d+)\\.(\\d+)\\.(\\d+)', family_replacement: 'Mobile Safari', tablet: !0, manufacturer: 'Apple' },
					{ regex: '(iPad).*Version/(\\d+)\\.(\\d+)', family_replacement: 'Mobile Safari', tablet: !0, manufacturer: 'Apple' },
					{ regex: '(iPad)', family_replacement: 'Mobile Safari', tablet: !0, manufacturer: 'Apple' },
					{ regex: '(AvantGo) (\\d+).(\\d+)', other: !0 },
					{ regex: '(Avant)', v1_replacement: '1', other: !0 },
					{ regex: '^(Nokia)', family_replacement: 'Nokia Services (WAP) Browser', manufacturer: 'Nokia' },
					{ regex: '(NokiaBrowser)/(\\d+)\\.(\\d+).(\\d+)\\.(\\d+)', manufacturer: 'Nokia' },
					{ regex: '(NokiaBrowser)/(\\d+)\\.(\\d+).(\\d+)', manufacturer: 'Nokia' },
					{ regex: '(NokiaBrowser)/(\\d+)\\.(\\d+)', manufacturer: 'Nokia' },
					{ regex: '(BrowserNG)/(\\d+)\\.(\\d+).(\\d+)', family_replacement: 'NokiaBrowser', manufacturer: 'Nokia' },
					{ regex: '(Series60)/5\\.0', v2_replacement: '0', v1_replacement: '7', family_replacement: 'NokiaBrowser', manufacturer: 'Nokia' },
					{ regex: '(Series60)/(\\d+)\\.(\\d+)', family_replacement: 'Nokia OSS Browser', manufacturer: 'Nokia' },
					{ regex: '(S40OviBrowser)/(\\d+)\\.(\\d+)\\.(\\d+)\\.(\\d+)', family_replacement: 'Nokia Series 40 Ovi Browser', manufacturer: 'Nokia' },
					{ regex: '(Nokia)[EN]?(\\d+)', manufacturer: 'Nokia' },
					{ regex: '(PlayBook).+RIM Tablet OS (\\d+)\\.(\\d+)\\.(\\d+)', family_replacement: 'Blackberry WebKit', tablet: !0, manufacturer: 'Nokia' },
					{ regex: '(Black[bB]erry).+Version/(\\d+)\\.(\\d+)\\.(\\d+)', family_replacement: 'Blackberry WebKit', manufacturer: 'RIM' },
					{ regex: '(Black[bB]erry)\\s?(\\d+)', family_replacement: 'Blackberry', manufacturer: 'RIM' },
					{ regex: '(OmniWeb)/v(\\d+)\\.(\\d+)', other: !0 },
					{ regex: '(Blazer)/(\\d+)\\.(\\d+)', family_replacement: 'Palm Blazer', manufacturer: 'Palm' },
					{ regex: '(Pre)/(\\d+)\\.(\\d+)', family_replacement: 'Palm Pre', manufacturer: 'Palm' },
					{ regex: '(Links) \\((\\d+)\\.(\\d+)', other: !0 },
					{ regex: '(QtWeb) Internet Browser/(\\d+)\\.(\\d+)', other: !0 },
					{ regex: '(Silk)/(\\d+)\\.(\\d+)(?:\\.([0-9\\-]+))?', other: !0, tablet: !0 },
					{ regex: '(AppleWebKit)/(\\d+)\\.?(\\d+)?\\+ .* Version/\\d+\\.\\d+.\\d+ Safari/', family_replacement: 'WebKit Nightly' },
					{ regex: '(Version)/(\\d+)\\.(\\d+)(?:\\.(\\d+))?.*Safari/', family_replacement: 'Safari' },
					{ regex: '(Safari)/\\d+' },
					{ regex: '(OLPC)/Update(\\d+)\\.(\\d+)', other: !0 },
					{ regex: '(OLPC)/Update()\\.(\\d+)', v1_replacement: '0', other: !0 },
					{ regex: '(SEMC\\-Browser)/(\\d+)\\.(\\d+)', other: !0 },
					{ regex: '(Teleca)', family_replacement: 'Teleca Browser', other: !0 },
					{ regex: 'Trident(.*)rv.(\\d+)\\.(\\d+)', family_replacement: 'IE' },
					{ regex: '(MSIE) (\\d+)\\.(\\d+)', family_replacement: 'IE' },
				],
				os_parsers: [
					{ regex: '(Android) (\\d+)\\.(\\d+)(?:[.\\-]([a-z0-9]+))?' },
					{ regex: '(Android)\\-(\\d+)\\.(\\d+)(?:[.\\-]([a-z0-9]+))?' },
					{ regex: '(Android) Donut', os_v2_replacement: '2', os_v1_replacement: '1' },
					{ regex: '(Android) Eclair', os_v2_replacement: '1', os_v1_replacement: '2' },
					{ regex: '(Android) Froyo', os_v2_replacement: '2', os_v1_replacement: '2' },
					{ regex: '(Android) Gingerbread', os_v2_replacement: '3', os_v1_replacement: '2' },
					{ regex: '(Android) Honeycomb', os_v1_replacement: '3' },
					{ regex: '(Silk-Accelerated=[a-z]{4,5})', os_replacement: 'Android' },
					{ regex: '(Windows Phone 6\\.5)' },
					{ regex: '(Windows (?:NT 5\\.2|NT 5\\.1))', os_replacement: 'Windows XP' },
					{ regex: '(XBLWP7)', os_replacement: 'Windows Phone OS' },
					{ regex: '(Windows NT 6\\.1)', os_replacement: 'Windows 7' },
					{ regex: '(Windows NT 6\\.0)', os_replacement: 'Windows Vista' },
					{ regex: '(Windows 98|Windows XP|Windows ME|Windows 95|Windows CE|Windows 7|Windows NT 4\\.0|Windows Vista|Windows 2000)' },
					{ regex: '(Windows NT 6\\.4|Windows NT 10\\.0)', os_replacement: 'Windows 10' },
					{ regex: '(Windows NT 6\\.2)', os_replacement: 'Windows 8' },
					{ regex: '(Windows Phone 8)', os_replacement: 'Windows Phone 8' },
					{ regex: '(Windows NT 5\\.0)', os_replacement: 'Windows 2000' },
					{ regex: '(Windows Phone OS) (\\d+)\\.(\\d+)' },
					{ regex: '(Windows ?Mobile)', os_replacement: 'Windows Mobile' },
					{ regex: '(WinNT4.0)', os_replacement: 'Windows NT 4.0' },
					{ regex: '(Win98)', os_replacement: 'Windows 98' },
					{ regex: '(Tizen)/(\\d+)\\.(\\d+)', other: !0 },
					{ regex: '(Mac OS X) (\\d+)[_.](\\d+)(?:[_.](\\d+))?', manufacturer: 'Apple' },
					{ regex: '(?:PPC|Intel) (Mac OS X)', manufacturer: 'Apple' },
					{ regex: '(CPU OS|iPhone OS) (\\d+)_(\\d+)(?:_(\\d+))?', os_replacement: 'iOS', manufacturer: 'Apple' },
					{ regex: '(iPhone|iPad|iPod); Opera', os_replacement: 'iOS', manufacturer: 'Apple' },
					{ regex: '(iPad); Opera', tablet: !0, manufacturer: 'Apple' },
					{ regex: '(iPhone|iPad|iPod).*Mac OS X.*Version/(\\d+)\\.(\\d+)', os_replacement: 'iOS', manufacturer: 'Apple' },
					{ regex: '(CrOS) [a-z0-9_]+ (\\d+)\\.(\\d+)(?:\\.(\\d+))?', os_replacement: 'Chrome OS' },
					{ regex: '(Debian)-(\\d+)\\.(\\d+)\\.(\\d+)(?:\\.(\\d+))?', other: !0 },
					{ regex: '(Linux Mint)(?:/(\\d+))?', other: !0 },
					{ regex: '(Mandriva)(?: Linux)?/(\\d+)\\.(\\d+)\\.(\\d+)(?:\\.(\\d+))?', other: !0 },
					{ regex: '(Symbian[Oo][Ss])/(\\d+)\\.(\\d+)', os_replacement: 'Symbian OS' },
					{ regex: '(Symbian/3).+NokiaBrowser/7\\.3', os_replacement: 'Symbian^3 Anna' },
					{ regex: '(Symbian/3).+NokiaBrowser/7\\.4', os_replacement: 'Symbian^3 Belle' },
					{ regex: '(Symbian/3)', os_replacement: 'Symbian^3' },
					{ regex: '(Series 60|SymbOS|S60)', os_replacement: 'Symbian OS' },
					{ regex: '(MeeGo)', other: !0 },
					{ regex: 'Symbian [Oo][Ss]', os_replacement: 'Symbian OS' },
					{ regex: '(Black[Bb]erry)[0-9a-z]+/(\\d+)\\.(\\d+)\\.(\\d+)(?:\\.(\\d+))?', os_replacement: 'BlackBerry OS', manufacturer: 'RIM' },
					{ regex: '(Black[Bb]erry).+Version/(\\d+)\\.(\\d+)\\.(\\d+)(?:\\.(\\d+))?', os_replacement: 'BlackBerry OS', manufacturer: 'RIM' },
					{ regex: '(RIM Tablet OS) (\\d+)\\.(\\d+)\\.(\\d+)', os_replacement: 'BlackBerry Tablet OS', tablet: !0, manufacturer: 'RIM' },
					{ regex: '(Play[Bb]ook)', os_replacement: 'BlackBerry Tablet OS', tablet: !0, manufacturer: 'RIM' },
					{ regex: '(Black[Bb]erry)', os_replacement: 'Blackberry OS', manufacturer: 'RIM' },
					{ regex: '(webOS|hpwOS)/(\\d+)\\.(\\d+)(?:\\.(\\d+))?', os_replacement: 'webOS' },
					{ regex: '(SUSE|Fedora|Red Hat|PCLinuxOS)/(\\d+)\\.(\\d+)\\.(\\d+)\\.(\\d+)', other: !0 },
					{ regex: '(SUSE|Fedora|Red Hat|Puppy|PCLinuxOS|CentOS)/(\\d+)\\.(\\d+)\\.(\\d+)', other: !0 },
					{ regex: '(Ubuntu|Kindle|Bada|Lubuntu|BackTrack|Red Hat|Slackware)/(\\d+)\\.(\\d+)' },
					{ regex: '(Windows|OpenBSD|FreeBSD|NetBSD|Ubuntu|Kubuntu|Android|Arch Linux|CentOS|WeTab|Slackware)' },
					{ regex: '(Linux|BSD)', other: !0 },
				],
				mobile_os_families: ['Windows Phone 6.5', 'Windows CE', 'Symbian OS'],
				device_parsers: [
					{ regex: 'HTC ([A-Z][a-z0-9]+) Build', device_replacement: 'HTC $1', manufacturer: 'HTC' },
					{ regex: 'HTC ([A-Z][a-z0-9 ]+) \\d+\\.\\d+\\.\\d+\\.\\d+', device_replacement: 'HTC $1', manufacturer: 'HTC' },
					{ regex: 'HTC_Touch_([A-Za-z0-9]+)', device_replacement: 'HTC Touch ($1)', manufacturer: 'HTC' },
					{ regex: 'USCCHTC(\\d+)', device_replacement: 'HTC $1 (US Cellular)', manufacturer: 'HTC' },
					{ regex: 'Sprint APA(9292)', device_replacement: 'HTC $1 (Sprint)', manufacturer: 'HTC' },
					{ regex: 'HTC ([A-Za-z0-9]+ [A-Z])', device_replacement: 'HTC $1', manufacturer: 'HTC' },
					{ regex: 'HTC-([A-Za-z0-9]+)', device_replacement: 'HTC $1', manufacturer: 'HTC' },
					{ regex: 'HTC_([A-Za-z0-9]+)', device_replacement: 'HTC $1', manufacturer: 'HTC' },
					{ regex: 'HTC ([A-Za-z0-9]+)', device_replacement: 'HTC $1', manufacturer: 'HTC' },
					{ regex: '(ADR[A-Za-z0-9]+)', device_replacement: 'HTC $1', manufacturer: 'HTC' },
					{ regex: '(HTC)', manufacturer: 'HTC' },
					{ regex: 'SonyEricsson([A-Za-z0-9]+)/', device_replacement: 'Ericsson $1', other: !0, manufacturer: 'Sony' },
					{ regex: 'Android[\\- ][\\d]+\\.[\\d]+\\; [A-Za-z]{2}\\-[A-Za-z]{2}\\; WOWMobile (.+) Build' },
					{ regex: 'Android[\\- ][\\d]+\\.[\\d]+\\.[\\d]+; [A-Za-z]{2}\\-[A-Za-z]{2}\\; (.+) Build' },
					{ regex: 'Android[\\- ][\\d]+\\.[\\d]+\\-update1\\; [A-Za-z]{2}\\-[A-Za-z]{2}\\; (.+) Build' },
					{ regex: 'Android[\\- ][\\d]+\\.[\\d]+\\; [A-Za-z]{2}\\-[A-Za-z]{2}\\; (.+) Build' },
					{ regex: 'Android[\\- ][\\d]+\\.[\\d]+\\.[\\d]+; (.+) Build' },
					{ regex: 'NokiaN([0-9]+)', device_replacement: 'Nokia N$1', manufacturer: 'Nokia' },
					{ regex: 'Nokia([A-Za-z0-9\\v-]+)', device_replacement: 'Nokia $1', manufacturer: 'Nokia' },
					{ regex: 'NOKIA ([A-Za-z0-9\\-]+)', device_replacement: 'Nokia $1', manufacturer: 'Nokia' },
					{ regex: 'Nokia ([A-Za-z0-9\\-]+)', device_replacement: 'Nokia $1', manufacturer: 'Nokia' },
					{ regex: 'Lumia ([A-Za-z0-9\\-]+)', device_replacement: 'Lumia $1', manufacturer: 'Nokia' },
					{ regex: 'Symbian', device_replacement: 'Nokia', manufacturer: 'Nokia' },
					{ regex: '(PlayBook).+RIM Tablet OS', device_replacement: 'Blackberry Playbook', tablet: !0, manufacturer: 'RIM' },
					{ regex: '(Black[Bb]erry [0-9]+);', manufacturer: 'RIM' },
					{ regex: 'Black[Bb]erry([0-9]+)', device_replacement: 'BlackBerry $1', manufacturer: 'RIM' },
					{ regex: '(Pre)/(\\d+)\\.(\\d+)', device_replacement: 'Palm Pre', manufacturer: 'Palm' },
					{ regex: '(Pixi)/(\\d+)\\.(\\d+)', device_replacement: 'Palm Pixi', manufacturer: 'Palm' },
					{ regex: '(Touchpad)/(\\d+)\\.(\\d+)', device_replacement: 'HP Touchpad', manufacturer: 'HP' },
					{ regex: 'HPiPAQ([A-Za-z0-9]+)/(\\d+).(\\d+)', device_replacement: 'HP iPAQ $1', manufacturer: 'HP' },
					{ regex: 'Palm([A-Za-z0-9]+)', device_replacement: 'Palm $1', manufacturer: 'Palm' },
					{ regex: 'Treo([A-Za-z0-9]+)', device_replacement: 'Palm Treo $1', manufacturer: 'Palm' },
					{ regex: 'webOS.*(P160UNA)/(\\d+).(\\d+)', device_replacement: 'HP Veer', manufacturer: 'HP' },
					{ regex: '(Kindle Fire)', manufacturer: 'Amazon' },
					{ regex: '(Kindle)', manufacturer: 'Amazon' },
					{ regex: '(Silk)/(\\d+)\\.(\\d+)(?:\\.([0-9\\-]+))?', device_replacement: 'Kindle Fire', tablet: !0, manufacturer: 'Amazon' },
					{ regex: '(iPad) Simulator;', manufacturer: 'Apple' },
					{ regex: '(iPad);', manufacturer: 'Apple' },
					{ regex: '(iPod);', manufacturer: 'Apple' },
					{ regex: '(iPhone) Simulator;', manufacturer: 'Apple' },
					{ regex: '(iPhone);', manufacturer: 'Apple' },
					{ regex: 'Nexus\\ ([A-Za-z0-9\\-]+)', device_replacement: 'Nexus $1' },
					{ regex: 'acer_([A-Za-z0-9]+)_', device_replacement: 'Acer $1', manufacturer: 'Acer' },
					{ regex: 'acer_([A-Za-z0-9]+)_', device_replacement: 'Acer $1', manufacturer: 'Acer' },
					{ regex: 'Amoi\\-([A-Za-z0-9]+)', device_replacement: 'Amoi $1', other: !0, manufacturer: 'Amoi' },
					{ regex: 'AMOI\\-([A-Za-z0-9]+)', device_replacement: 'Amoi $1', other: !0, manufacturer: 'Amoi' },
					{ regex: 'Asus\\-([A-Za-z0-9]+)', device_replacement: 'Asus $1', manufacturer: 'Asus' },
					{ regex: 'ASUS\\-([A-Za-z0-9]+)', device_replacement: 'Asus $1', manufacturer: 'Asus' },
					{ regex: 'BIRD\\-([A-Za-z0-9]+)', device_replacement: 'Bird $1', other: !0 },
					{ regex: 'BIRD\\.([A-Za-z0-9]+)', device_replacement: 'Bird $1', other: !0 },
					{ regex: 'BIRD ([A-Za-z0-9]+)', device_replacement: 'Bird $1', other: !0 },
					{ regex: 'Dell ([A-Za-z0-9]+)', device_replacement: 'Dell $1', manufacturer: 'Dell' },
					{ regex: 'DoCoMo/2\\.0 ([A-Za-z0-9]+)', device_replacement: 'DoCoMo $1', other: !0 },
					{ regex: '([A-Za-z0-9]+)\\_W\\;FOMA', device_replacement: 'DoCoMo $1', other: !0 },
					{ regex: '([A-Za-z0-9]+)\\;FOMA', device_replacement: 'DoCoMo $1', other: !0 },
					{ regex: 'vodafone([A-Za-z0-9]+)', device_replacement: 'Huawei Vodafone $1', other: !0 },
					{ regex: 'i\\-mate ([A-Za-z0-9]+)', device_replacement: 'i-mate $1', other: !0 },
					{ regex: 'Kyocera\\-([A-Za-z0-9]+)', device_replacement: 'Kyocera $1', other: !0 },
					{ regex: 'KWC\\-([A-Za-z0-9]+)', device_replacement: 'Kyocera $1', other: !0 },
					{ regex: 'Lenovo\\-([A-Za-z0-9]+)', device_replacement: 'Lenovo $1', manufacturer: 'Lenovo' },
					{ regex: 'Lenovo\\_([A-Za-z0-9]+)', device_replacement: 'Lenovo $1', manufacturer: 'Levovo' },
					{ regex: 'LG/([A-Za-z0-9]+)', device_replacement: 'LG $1', manufacturer: 'LG' },
					{ regex: 'LG-LG([A-Za-z0-9]+)', device_replacement: 'LG $1', manufacturer: 'LG' },
					{ regex: 'LGE-LG([A-Za-z0-9]+)', device_replacement: 'LG $1', manufacturer: 'LG' },
					{ regex: 'LGE VX([A-Za-z0-9]+)', device_replacement: 'LG $1', manufacturer: 'LG' },
					{ regex: 'LG ([A-Za-z0-9]+)', device_replacement: 'LG $1', manufacturer: 'LG' },
					{ regex: 'LGE LG\\-AX([A-Za-z0-9]+)', device_replacement: 'LG $1', manufacturer: 'LG' },
					{ regex: 'LG\\-([A-Za-z0-9]+)', device_replacement: 'LG $1', manufacturer: 'LG' },
					{ regex: 'LGE\\-([A-Za-z0-9]+)', device_replacement: 'LG $1', manufacturer: 'LG' },
					{ regex: 'LG([A-Za-z0-9]+)', device_replacement: 'LG $1', manufacturer: 'LG' },
					{ regex: '(KIN)\\.One (\\d+)\\.(\\d+)', device_replacement: 'Microsoft $1' },
					{ regex: '(KIN)\\.Two (\\d+)\\.(\\d+)', device_replacement: 'Microsoft $1' },
					{ regex: '(Motorola)\\-([A-Za-z0-9]+)', manufacturer: 'Motorola' },
					{ regex: 'MOTO\\-([A-Za-z0-9]+)', device_replacement: 'Motorola $1', manufacturer: 'Motorola' },
					{ regex: 'MOT\\-([A-Za-z0-9]+)', device_replacement: 'Motorola $1', manufacturer: 'Motorola' },
					{ regex: 'Philips([A-Za-z0-9]+)', device_replacement: 'Philips $1', manufacturer: 'Philips' },
					{ regex: 'Philips ([A-Za-z0-9]+)', device_replacement: 'Philips $1', manufacturer: 'Philips' },
					{ regex: 'SAMSUNG-([A-Za-z0-9\\-]+)', device_replacement: 'Samsung $1', manufacturer: 'Samsung' },
					{ regex: 'SAMSUNG\\; ([A-Za-z0-9\\-]+)', device_replacement: 'Samsung $1', manufacturer: 'Samsung' },
					{ regex: 'Softbank/1\\.0/([A-Za-z0-9]+)', device_replacement: 'Softbank $1', other: !0 },
					{ regex: 'Softbank/2\\.0/([A-Za-z0-9]+)', device_replacement: 'Softbank $1', other: !0 },
					{
						regex: '(hiptop|avantgo|plucker|xiino|blazer|elaine|up.browser|up.link|mmp|smartphone|midp|wap|vodafone|o2|pocket|mobile|pda)',
						device_replacement: 'Generic Smartphone',
					},
					{
						regex: '^(1207|3gso|4thp|501i|502i|503i|504i|505i|506i|6310|6590|770s|802s|a wa|acer|acs\\-|airn|alav|asus|attw|au\\-m|aur |aus |abac|acoo|aiko|alco|alca|amoi|anex|anny|anyw|aptu|arch|argo|bell|bird|bw\\-n|bw\\-u|beck|benq|bilb|blac|c55/|cdm\\-|chtm|capi|comp|cond|craw|dall|dbte|dc\\-s|dica|ds\\-d|ds12|dait|devi|dmob|doco|dopo|el49|erk0|esl8|ez40|ez60|ez70|ezos|ezze|elai|emul|eric|ezwa|fake|fly\\-|fly\\_|g\\-mo|g1 u|g560|gf\\-5|grun|gene|go.w|good|grad|hcit|hd\\-m|hd\\-p|hd\\-t|hei\\-|hp i|hpip|hs\\-c|htc |htc\\-|htca|htcg)',
						device_replacement: 'Generic Feature Phone',
					},
					{
						regex: '^(htcp|htcs|htct|htc\\_|haie|hita|huaw|hutc|i\\-20|i\\-go|i\\-ma|i230|iac|iac\\-|iac/|ig01|im1k|inno|iris|jata|java|kddi|kgt|kgt/|kpt |kwc\\-|klon|lexi|lg g|lg\\-a|lg\\-b|lg\\-c|lg\\-d|lg\\-f|lg\\-g|lg\\-k|lg\\-l|lg\\-m|lg\\-o|lg\\-p|lg\\-s|lg\\-t|lg\\-u|lg\\-w|lg/k|lg/l|lg/u|lg50|lg54|lge\\-|lge/|lynx|leno|m1\\-w|m3ga|m50/|maui|mc01|mc21|mcca|medi|meri|mio8|mioa|mo01|mo02|mode|modo|mot |mot\\-|mt50|mtp1|mtv |mate|maxo|merc|mits|mobi|motv|mozz|n100|n101|n102|n202|n203|n300|n302|n500|n502|n505|n700|n701|n710|nec\\-|nem\\-|newg|neon)',
						device_replacement: 'Generic Feature Phone',
					},
					{
						regex: '^(netf|noki|nzph|o2 x|o2\\-x|opwv|owg1|opti|oran|ot\\-s|p800|pand|pg\\-1|pg\\-2|pg\\-3|pg\\-6|pg\\-8|pg\\-c|pg13|phil|pn\\-2|pt\\-g|palm|pana|pire|pock|pose|psio|qa\\-a|qc\\-2|qc\\-3|qc\\-5|qc\\-7|qc07|qc12|qc21|qc32|qc60|qci\\-|qwap|qtek|r380|r600|raks|rim9|rove|s55/|sage|sams|sc01|sch\\-|scp\\-|sdk/|se47|sec\\-|sec0|sec1|semc|sgh\\-|shar|sie\\-|sk\\-0|sl45|slid|smb3|smt5|sp01|sph\\-|spv |spv\\-|sy01|samm|sany|sava|scoo|send|siem|smar|smit|soft|sony|t\\-mo|t218|t250|t600|t610|t618|tcl\\-|tdg\\-|telm|tim\\-|ts70|tsm\\-|tsm3|tsm5|tx\\-9|tagt)',
						device_replacement: 'Generic Feature Phone',
					},
					{
						regex: '^(talk|teli|topl|tosh|up.b|upg1|utst|v400|v750|veri|vk\\-v|vk40|vk50|vk52|vk53|vm40|vx98|virg|vite|voda|vulc|w3c |w3c\\-|wapj|wapp|wapu|wapm|wig |wapi|wapr|wapv|wapy|wapa|waps|wapt|winc|winw|wonu|x700|xda2|xdag|yas\\-|your|zte\\-|zeto|aste|audi|avan|blaz|brew|brvw|bumb|ccwa|cell|cldc|cmd\\-|dang|eml2|fetc|hipt|http|ibro|idea|ikom|ipaq|jbro|jemu|jigs|keji|kyoc|kyok|libw|m\\-cr|midp|mmef|moto|mwbp|mywa|newt|nok6|o2im|pant|pdxg|play|pluc|port|prox|rozo|sama|seri|smal|symb|treo|upsi|vx52|vx53|vx60|vx61|vx70|vx80|vx81|vx83|vx85|wap\\-|webc|whit|wmlb|xda\\-|xda\\_)',
						device_replacement: 'Generic Feature Phone',
					},
					{
						regex: '(bot|borg|google(^tv)|yahoo|slurp|msnbot|msrbot|openbot|archiver|netresearch|lycos|scooter|altavista|teoma|gigabot|baiduspider|blitzbot|oegp|charlotte|furlbot|http%20client|polybot|htdig|ichiro|mogimogi|larbin|pompos|scrubby|searchsight|seekbot|semanticdiscovery|silk|snappy|speedy|spider|voila|vortex|voyager|zao|zeal|fast\\-webcrawler|converacrawler|dataparksearch|findlinks)',
						device_replacement: 'Spider',
					},
				],
				mobile_browser_families: [
					'Firefox Mobile',
					'Opera Mobile',
					'Opera Mini',
					'Mobile Safari',
					'webOS',
					'IE Mobile',
					'Playstation Portable',
					'Nokia',
					'Blackberry',
					'Palm',
					'Silk',
					'Android',
					'Maemo',
					'Obigo',
					'Netfront',
					'AvantGo',
					'Teleca',
					'SEMC-Browser',
					'Bolt',
					'Iris',
					'UP.Browser',
					'Symphony',
					'Minimo',
					'Bunjaloo',
					'Jasmine',
					'Dolfin',
					'Polaris',
					'BREW',
					'Chrome Mobile',
					'Chrome Mobile iOS',
					'UC Browser',
					'Tizen Browser',
				],
			}
		;(e.parsers = ['device_parsers', 'browser_parsers', 'os_parsers', 'mobile_os_families', 'mobile_browser_families']),
			(e.types = ['browser', 'os', 'device']),
			(e.regexes =
				r ||
				(function () {
					var r = {}
					return (
						e.parsers.map(function (e) {
							r[e] = []
						}),
						r
					)
				})()),
			(e.families = (function () {
				var r = {}
				return (
					e.types.map(function (e) {
						r[e] = []
					}),
					r
				)
			})())
		var a = Array.prototype,
			o = (Object.prototype, Function.prototype, a.forEach)
		a.indexOf
		var i = function (e, r) {
				for (var a = {}, o = 0; r.length > o && !(a = r[o](e)); o++);
				return a
			},
			n = function (e, r) {
				t(e, function (e) {
					t(r, function (r) {
						delete e[r]
					})
				})
			},
			t = (forEach = function (e, r, a) {
				if (null != e)
					if (o && e.forEach === o) e.forEach(r, a)
					else if (e.length === +e.length) for (var i = 0, n = e.length; n > i; i++) r.call(a, e[i], i, e)
					else for (var t in e) _.has(e, t) && r.call(a, e[t], t, e)
			}),
			l = function (e) {
				return !(!e || e === undefined || null == e)
			},
			d = function (e) {
				var r = ''
				return (e = e || {}), l(e) && l(e.major) && ((r += e.major), l(e.minor) && ((r += '.' + e.minor), l(e.patch) && (r += '.' + e.patch))), r
			},
			c = function (e) {
				e = e || {}
				var r = d(e)
				return r && (r = ' ' + r), e && l(e.family) ? e.family + r : ''
			}
		return (
			(e.parse = function (r) {
				var a = function (r) {
						return e.regexes[r + '_parsers'].map(function (e) {
							function a(r) {
								var a = r.match(o)
								if (!a) return null
								var t = {}
								return (
									(t.family = (i ? i.replace('$1', a[1]) : a[1]) || 'other'),
									(t.major = parseInt(n ? n : a[2]) || null),
									(t.minor = a[3] ? parseInt(a[3]) : null),
									(t.patch = a[4] ? parseInt(a[4]) : null),
									(t.tablet = e.tablet),
									(t.man = e.manufacturer || null),
									t
								)
							}
							var o = RegExp(e.regex),
								i = e[('browser' === r ? 'family' : r) + '_replacement'],
								n = e.major_version_replacement
							return a
						})
					},
					o = function () {},
					t = a('browser'),
					m = a('os'),
					p = a('device'),
					s = new o()
				;(s.source = r),
					(s.browser = i(r, t)),
					l(s.browser) ? ((s.browser.name = c(s.browser)), (s.browser.version = d(s.browser))) : (s.browser = {}),
					(s.os = i(r, m)),
					l(s.os) ? ((s.os.name = c(s.os)), (s.os.version = d(s.os))) : (s.os = {}),
					(s.device = i(r, p)),
					l(s.device) ? ((s.device.name = c(s.device)), (s.device.version = d(s.device))) : (s.device = { tablet: !1, family: 'Other' })
				var g = {}
				return (
					e.regexes.mobile_browser_families.map(function (e) {
						g[e] = !0
					}),
					e.regexes.mobile_os_families.map(function (e) {
						g[e] = !0
					}),
					(s.device.type =
						'Spider' === s.browser.family
							? 'Spider'
							: s.browser.tablet || s.os.tablet || s.device.tablet
							? 'Tablet'
							: g.hasOwnProperty(s.browser.family)
							? 'Mobile'
							: 'Desktop'),
					(s.device.manufacturer = s.browser.man || s.os.man || s.device.man || null),
					n([s.browser, s.os, s.device], ['tablet', 'man']),
					s
				)
			}),
			e
		)
	})())
	'undefined' != typeof exports ? ('undefined' != typeof module && module.exports && (exports = module.exports = r), (exports.detect = r)) : (e.detect = r),
		'function' == typeof define &&
			define.amd &&
			define(function () {
				return r
			})
})(window)
