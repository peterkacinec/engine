angular.module('registries')
.config(['$translateProvider', function($translateProvider) {
	$translateProvider.preferredLanguage('sk');
	$translateProvider.useMissingTranslationHandlerLog();
	$translateProvider.translations('sk', {
		'login.title': 'Prihlásenie',
		'login.loginName': 'Login',
		'login.password': 'Heslo',
		'login.forgottenPassword': 'Zabudnuté heslo',
		'login.authentication.failed': 'Prihlásenie zlyhalo',
		"schema.people.baseData": "Základné informácie",
		"schema.people.baseData.identifier": "Identifikátor",
		"schema.people.baseData.name": "Meno",
		"schema.people.baseData.surName": "Priezvisko",
		"schema.people.baseData.bornName": "Rodné priezvisko",
		"menu.member.title": "Člen",
		"menu.player.title": "Hráč",
		"menu.referee.title": "Rozhodca",
		"menu.coach.title": "Tréner",
		"menu.stadium.title": "Štadión",
		"menu.club.title": "Klub",
		"menu.person.title": "Osoba",

		"menu.company.title": "Spoločnosť",
		"menu.my.profile.title": "Môj profil",
		"menu.permissions.title": "Oprávnenia",
		"menu.schemas.title": "Schémy",
		"menu.new.lower.level": "Nový",
		"menu.search.lower.level": "Hľadať",
		"menu.profile.lower.level": "Profil",
		"menu.change.password.lower.level": "Zmena hesla",
		"menu.new.group.lower.level": "Nová skupina",
		"menu.permission.groups.lower.level": "Skupiny oprávnení",
		"menu.user.permissions.lower.level": "Oprávnenia používateľov",
		"menu.schema.list.lower.level": "Zoznam schém",
		"header.settings": "Nastavenia",
		"header.log.out": "Odhlásiť sa",
		"personal.change.password.change.password": "Zmena hesla",
		"personal.change.password.current.password": "Staré heslo",
		"personal.change.password.new.password": "Nové heslo",
		"personal.change.password.new.password.check": "Kontrola nového hesla",
		"generic.search.searching": "Vyhľadávanie",
		"generic.search.add": "Pridať",
		"generic.search.remove": "Zrušiť",
		"generic.search.search": "Hľadať",
		"generic.search.atribute": "Atribút",
		"generic.search.operator": "Operátor",
		"generic.search.value": "Hodnota",
		"generic.search.view": "Zobraziť",
		"generic.search.result.of.searching": "Výsledok vyhľadávania",
		"registry.new.new": "Nový",
		"registry.new.cancel": "Zrušiť",
		"registry.new.send": "Odoslať",
		"security.group.edit.list.of.security.groups": "Zoznam bezpečnostných skupín",
		"security.group.edit.id": "ID",
		"security.group.edit.edit": "Upraviť",
		"security.group.edit.actions": "Akcie",
		"security.group.edit.save": "Uložiť",
		"security.group.edit.available.permissions": "Dostupné práva",
		"security.group.edit.name": "Názov",
		"security.group.edit.added.permissions": "Pridelené práva",
		"security.group.edit.permissions": "Oprávnenia",
		"security.group.edit.name.of.group": "Názov skupiny",
		"security.group.edit.id.of.group": "Identifikátor skupiny",
		"security.group.edit.modification.of.security.group": "Modifikácia bezpečnostnej skupiny",
		"security.user.edit.modification.done": "Použivateľ bol modifikovaný",
		"schema.editor.save": "Uložiť",
		"schema.editor.edit": "Upraviť",
		"schema.editor.id": "ID",
		"schema.editor.name": "Názov",
		"schema.editor.actions": "Akcie",
		"schema.editor.size": "Veľkosť",
		"schema.editor.list.of.schemas.for.editation": "Zoznam schém na editáciu",
		"schema.person.title": "Nová osoba",
		"schema.org.title": "Nová organizácia",
		"schema.stadium.title": "Nový štadión",
		"personal.change.password.passwords.not.equal": "Nové a kontrolné heslo sa nerovnajú!",
		"personal.change.password.password.changed": "Heslo zmenene",
		"personal.change.password.password.not.changed": "Heslo sa nepodarilo zmeniť: {{data}}",
		'registry.succesfully.saved':'Úspešne uložené',
		'registry.unsuccesfully.saved':'Nepodarilo sa uložiť dáta!',
		'registry.form.not.filled.correctly':'Formulár nie je správne vyplnený',
		'psui.uploadable.image.unsupported.image.type':'Nepodporovaný formát obrázku',
		'psui.imageresizor.rotate':'otočiť',
		'psui.imageresizor.ok':'ok',
		'date.monday':'Po',
		'date.tuesday':'Ut',
		'date.wednesday':'St',
		'date.thursday':'Št',
		'date.friday':'Pi',
		'date.saturday':'So',
		'date.sunday':'Ne',
		'date.jan':'Jan',
		'date.feb':'Feb',
		'date.mar':'Mar',
		'date.apr':'Apr',
		'date.may':'Máj',
		'date.jun':'Jún',
		'date.jul':'Júl',
		'date.aug':'Aug',
		'date.sep':'Sep',
		'date.oct':'Okt',
		'date.nov':'Nov',
		'date.dec':'Dec',
		'date.current.day':'Dnešný deň',
		'security.user.edit.searching':'Vyhľadávanie',
		'security.user.edit.value':'Hodnota',
		'security.user.edit.operator':'Operátor',
		'security.user.edit.save':'Uložiť',
		'security.user.edit.available.permissions':'Dostupné práva',
		'security.user.edit.added.permissions':'Pridelené práva',
		'security.user.edit.permissions.for.user':'Práva pre používateľa',
		'security.user.edit.available.groups':'Dostupné skupiny',
		'security.user.edit.added.groups':'Pridelené skupiny',
		'security.user.edit.groups.for.users':'Skupiny pre používateľa',
		'security.user.edit.edit':'Upraviť',
		'security.user.edit.actions':'Akcie',
		'security.user.edit.result':'Výsledok',
		'security.user.edit.search':'Hľadať',
		'security.user.edit.add':'Pridať',
		'security.user.edit.attribute':'Atribút',
		'security.user.edit.cancel':'Zrušiť',
		'psui-objectlink.btn.save': 'Uložiť',
		'psui-objectlink.btn.cancel': 'Zrušiť',
		
		"errors.validation.required": "Povinné pole",


	});

	$translateProvider.translations('cz', {
		'login.title': 'Přihlášení ',
		'login.loginName': 'Login ',
		'login.password': 'Heslo ',
		'login.forgottenPassword': 'zapomenuté heslo ',
		'schema.people.baseData': 'základní informace ',
		'schema.people.baseData.identifier': 'identifikátor ',
		'schema.people.baseData.name': 'jméno ',
		'schema.people.baseData.surName': 'příjmení ',
		'schema.people.baseData.bornName': 'rodné příjmení ',
		'menu.member.title': 'člen ',
		'menu.player.title': 'hráč ',
		'menu.referee.title': 'rozhodčí ',
		'menu.coach.title': 'trenér ',
		'menu.stadium.title': 'stadion ',
		'menu.club.title': 'klub ',
		'menu.person.title': 'osoba ',

		'menu.company.title': 'společnost ',
		'menu.my.profile.title': 'Můj profil ',
		'menu.permissions.title': 'oprávnění ',
		'menu.schemas.title': 'schémata ',
		'menu.new.lower.level': 'nový ',
		'menu.search.lower.level': 'hledat ',
		'menu.profile.lower.level': 'profil ',
		'menu.change.password.lower.level': 'Změna hesla ',
		'menu.new.group.lower.level': 'Nová skupina ',
		'menu.permission.groups.lower.level': 'skupiny oprávnění ',
		'menu.user.permissions.lower.level': 'oprávnění uživatelů ',
		'menu.schema.list.lower.level': 'seznam schémat ',
		'header.settings': 'nastavení ',
		'header.log.out': 'odhlásit se ',
		'personal.change.password.change.password': 'Změna hesla ',
		'personal.change.password.current.password': 'staré heslo ',
		'personal.change.password.new.password': 'nové heslo ',
		'personal.change.password.new.password.check': 'Kontrola nového hesla ',
		'generic.search.searching': 'vyhledávání ',
		'generic.search.add': 'přidat ',
		'generic.search.remove': 'Zrušit ',
		'generic.search.search': 'hledat ',
		'generic.search.atribute': 'atribut ',
		'generic.search.operator': 'operátor ',
		'generic.search.value': 'hodnota ',
		'generic.search.view': 'Zobrazit ',
		'generic.search.result.of.searching': 'výsledek vyhledávání ',
		'registry.new.new': 'nový ',
		'registry.new.cancel': 'Zrušit ',
		'registry.new.send': 'odeslat ',
		'security.group.edit.list.of.security.groups': 'Seznam bezpečnostních skupin ',
		'security.group.edit.id': 'ID ',
		'security.group.edit.edit': 'upravit ',
		'security.group.edit.actions': 'akce ',
		'security.group.edit.save': 'uložit ',
		'security.group.edit.available.permissions': 'dostupné práva ',
		'security.group.edit.name': 'Název ',
		'security.group.edit.added.permissions': 'přidělená práva ',
		'security.group.edit.permissions': 'oprávnění ',
		'security.group.edit.name.of.group': 'název skupiny ',
		'security.group.edit.id.of.group': 'identifikátor skupiny ',
		'security.group.edit.modification.of.security.group': 'Modifikace bezpečnostní skupiny ',
		'schema.editor.save': 'uložit ',
		'schema.editor.edit': 'upravit ',
		'schema.editor.id': 'ID ',
		'schema.editor.name': 'Název ',
		'schema.editor.actions': 'akce ',
		'schema.editor.size': 'velikost ',
		'schema.editor.list.of.schemas.for.editation': 'Seznam schémat na editaci ',
		'personal.change.password.passwords.not.equal': 'Nové a kontrolní heslo se nerovnají! ',
		'personal.change.password.password.changed': 'heslo změněno ',
		'personal.change.password.password.not.changed': 'Heslo se nepodařilo změnit ',
		'registry.succesfully.saved': 'úspěšně uloženo ',
		'registry.unsuccesfully.saved': 'Nepodařilo se uložit data! ',
		'registry.form.not.filled.correctly': 'Formulář není správně vyplněný ',
		'psui.uploadable.image.unsupported.image.type': 'Nepodporovaný formát obrázku ',
		'psui.imageresizor.rotate': 'otočit ',
		'psui.imageresizor.ok': 'ok ',
		'date.monday': 'Po ',
		'date.tuesday': 'Út ',
		'date.wednesday': 'St ',
		'date.thursday': 'Čt ',
		'date.friday': 'Pá',
		'date.saturday': 'So',
		'date.sunday': 'Ne',
		'date.jan': 'Led',
		'date.feb': 'Úno',
		'date.mar': 'Bře',
		'date.apr': 'Dub',
		'date.may': 'Kvě',
		'date.jun': 'Čvn',
		'date.jul': 'Čvc',
		'date.aug': 'Srp',
		'date.sep': 'Zář',
		'date.oct': 'Řjn',
		'date.nov': 'Lis',
		'date.dec': 'Pro',
		'date.current.day': 'dnešní den ',
		'security.user.edit.searching': 'vyhledávání ',
		'security.user.edit.value': 'hodnota ',
		'security.user.edit.operator': 'operátor ',
		'security.user.edit.save': 'uložit ',
		'security.user.edit.available.permissions': 'dostupná práva ',
		'security.user.edit.added.permissions': 'přidělená práva ',
		'security.user.edit.permissions.for.user': 'Práva pro uživatele ',
		'security.user.edit.available.groups': 'dostupné skupiny ',
		'security.user.edit.added.groups': 'přidělené skupiny ',
		'security.user.edit.groups.for.users': 'Skupiny pro uživatele ',
		'security.user.edit.edit': 'upravit ',
		'security.user.edit.actions': 'akce ',
		'security.user.edit.result': 'výsledek ',
		'security.user.edit.search': 'hledat ',
		'security.user.edit.add': 'přidat ',
		'security.user.edit.attribute': 'atribut ',
		'security.user.edit.cancel': 'Zrušit ',

		'errors.validation.required': 'Povinné pole'
	});
}])
.controller('langSelectCtrl', ['$scope', '$translate', function($scope, $translate) {
	$scope.setLang = function(lang) {
		$translate.use(lang);
	};
}]);
