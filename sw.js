// Cache all css
// 
const raw = [

    "/",
    "https://ghbtns.com/github-btn.html?user=dfahlander&repo=Dexie.js&type=star&count=true",
    "https://api.github.com/repos/dfahlander/Dexie.js",
    "https://buttons.github.io/buttons.js",
    "https://unpkg.com/dexie",
    "https://www.google-analytics.com/analytics.js",
    
    "/announcements/2024-03-27",
    
    "/docs/API-Reference",
    
    "/docs/Tutorial/Angular",
    
    "/docs/Tutorial/Best-Practices",
    
    "/docs/Tutorial/Building-Addons",
    
    "/docs/Collection/Collection.and()",
    
    "/docs/Collection/Collection.clone()",
    
    "/docs/Collection/Collection.count()",
    
    "/docs/Collection/Collection.delete()",
    
    "/docs/Collection/Collection.desc()",
    
    "/docs/Collection/Collection.distinct()",
    
    "/docs/Collection/Collection.each()",
    
    "/docs/Collection/Collection.eachKey()",
    
    "/docs/Collection/Collection.eachPrimaryKey()",
    
    "/docs/Collection/Collection.eachUniqueKey()",
    
    "/docs/Collection/Collection.filter()",
    
    "/docs/Collection/Collection.first()",
    
    "/docs/Collection/Collection.keys()",
    
    "/docs/Collection/Collection.last()",
    
    "/docs/Collection/Collection.limit()",
    
    "/docs/Collection/Collection",
    
    "/docs/Collection/Collection.modify()",
    
    "/docs/Collection/Collection.offset()",
    
    "/docs/Collection/Collection.or()",
    
    "/docs/Collection/Collection.primaryKeys()",
    
    "/docs/Collection/Collection.raw()",
    
    "/docs/Collection/Collection.reverse()",
    
    "/docs/Collection/Collection.sortBy()",
    
    "/docs/Collection/Collection.toArray()",
    
    "/docs/Collection/Collection.uniqueKeys()",
    
    "/docs/Collection/Collection.until()",
    
    "/docs/Compound-Index",
    
    "/docs/Tutorial/Consuming-dexie-as-a-module",
    
    "/docs/DBCore/DBCore",
    
    "/docs/DBCore/DBCoreAddRequest",
    
    "/docs/DBCore/DBCoreCountRequest",
    
    "/docs/DBCore/DBCoreCursor",
    
    "/docs/DBCore/DBCoreDeleteRangeRequest",
    
    "/docs/DBCore/DBCoreDeleteRequest",
    
    "/docs/DBCore/DBCoreGetManyRequest",
    
    "/docs/DBCore/DBCoreGetRequest",
    
    "/docs/DBCore/DBCoreIndex",
    
    "/docs/DBCore/DBCoreKeyRange",
    
    "/docs/DBCore/DBCoreMutateRequest",
    
    "/docs/DBCore/DBCoreMutateResponse",
    
    "/docs/DBCore/DBCoreOpenCursorRequest",
    
    "/docs/DBCore/DBCorePutRequest",
    
    "/docs/DBCore/DBCoreQuery",
    
    "/docs/DBCore/DBCoreQueryRequest",
    
    "/docs/DBCore/DBCoreQueryResponse",
    
    "/docs/DBCore/DBCoreRangeType",
    
    "/docs/DBCore/DBCoreSchema",
    
    "/docs/DBCore/DBCoreTable",
    
    "/docs/DBCore/DBCoreTableSchema",
    
    "/docs/DBCore/DBCoreTransaction",
    
    "/docs/DBCore/DBCoreTransactionMode",
    
    "/cloud/docs/DBPermissionSet",
    
    "/docs/Deprecations",
    
    "/docs/DerivedWork",
    
    "/docs/Tutorial/Design",
    
    "/docs/DexieErrors/Dexie.AbortError",
    
    "/docs/DexieErrors/Dexie.BulkError",
    
    "/docs/DexieErrors/Dexie.ConstraintError",
    
    "/docs/DexieErrors/Dexie.DataCloneError",
    
    "/docs/DexieErrors/Dexie.DataError",
    
    "/docs/DexieErrors/Dexie.DatabaseClosedError",
    
    "/docs/DexieErrors/Dexie.IncompatiblePromiseError",
    
    "/docs/DexieErrors/Dexie.InternalError",
    
    "/docs/DexieErrors/Dexie.InvalidAccessError",
    
    "/docs/DexieErrors/Dexie.InvalidArgumentError",
    
    "/docs/DexieErrors/Dexie.InvalidStateError",
    
    "/docs/DexieErrors/Dexie.InvalidTableError",
    
    "/docs/DexieErrors/Dexie.MissingAPIError",
    
    "/docs/DexieErrors/Dexie.ModifyError",
    
    "/docs/DexieErrors/Dexie.NoSuchDatabaseError",
    
    "/docs/DexieErrors/Dexie.NotFoundError",
    
    "/docs/Observable/Dexie.Observable.DatabaseChange",
    
    "/docs/Observable/Dexie.Observable",
    
    "/docs/DexieErrors/Dexie.OpenFailedError",
    
    "/docs/DexieErrors/Dexie.PrematureCommitError",
    
    "/docs/DexieErrors/Dexie.QuotaExceededError",
    
    "/docs/DexieErrors/Dexie.ReadOnlyError",
    
    "/docs/DexieErrors/Dexie.SchemaError",
    
    "/docs/DexieErrors/Dexie.SubTransactionError",
    
    "/docs/Syncable/Dexie.Syncable.IDatabaseChange",
    
    "/docs/Syncable/Dexie.Syncable.IPersistedContext",
    
    "/docs/Syncable/Dexie.Syncable.ISyncProtocol",
    
    "/docs/Syncable/Dexie.Syncable.StatusTexts",
    
    "/docs/Syncable/Dexie.Syncable.Statuses",
    
    "/docs/Syncable/Dexie.Syncable.js",
    
    "/docs/Syncable/Dexie.Syncable.registerSyncProtocol()",
    
    "/docs/DexieErrors/Dexie.TimeoutError",
    
    "/docs/DexieErrors/Dexie.TransactionInactiveError",
    
    "/docs/DexieErrors/Dexie.UnknownError",
    
    "/docs/DexieErrors/Dexie.UnsupportedError",
    
    "/docs/DexieErrors/Dexie.UpgradeError",
    
    "/docs/DexieErrors/Dexie.VersionChangeError",
    
    "/docs/DexieErrors/Dexie.VersionError",
    
    "/docs/Dexie/Dexie.%5Btable%5D",
    
    "/docs/Dexie/Dexie.addons",
    
    "/docs/Dexie/Dexie.async()",
    
    "/docs/Dexie/Dexie.backendDB()",
    
    "/docs/Dexie/Dexie.close()",
    
    "/docs/Dexie/Dexie.currentTransaction",
    
    "/docs/Dexie/Dexie.debug",
    
    "/docs/Dexie/Dexie.deepClone()",
    
    "/docs/Dexie/Dexie.defineClass()",
    
    "/docs/Dexie/Dexie.delByKeyPath()",
    
    "/docs/Dexie/Dexie.delete()",
    
    "/docs/Dexie/Dexie.derive()",
    
    "/docs/Dexie/Dexie.events()",
    
    "/docs/Dexie/Dexie.exists()",
    
    "/docs/Dexie/Dexie.extend()",
    
    "/docs/Dexie/Dexie.fakeAutoComplete()",
    
    "/docs/Dexie/Dexie.getByKeyPath()",
    
    "/docs/Dexie/Dexie.getDatabaseNames()",
    
    "/docs/Dexie/Dexie.hasFailed()",
    
    "/docs/Dexie/Dexie.ignoreTransaction()",
    
    "/docs/Dexie/Dexie.isOpen()",
    
    "/docs/Dexie.js",
    
    "/docs/Dexie/Dexie",
    
    "/docs/Dexie/Dexie.name",
    
    "/docs/Dexie/Dexie.on()",
    
    "/docs/Dexie/Dexie.on.blocked",
    
    "/docs/Dexie/Dexie.on.close",
    
    "/docs/Dexie/Dexie.on.error",
    
    "/docs/Dexie/Dexie.on.populate-(old-version)",
    
    "/docs/Dexie/Dexie.on.populate",
    
    "/docs/Dexie/Dexie.on.ready",
    
    "/docs/Dexie/Dexie.on.storagemutated",
    
    "/docs/Dexie/Dexie.on.versionchange",
    
    "/docs/Dexie/Dexie.open()",
    
    "/docs/Dexie/Dexie.override()",
    
    "/docs/Dexie/Dexie.semVer",
    
    "/docs/Dexie/Dexie.setByKeyPath()",
    
    "/docs/Dexie/Dexie.shallowClone()",
    
    "/docs/Dexie/Dexie.spawn()",
    
    "/docs/Dexie/Dexie.table()",
    
    "/docs/Dexie/Dexie.tables",
    
    "/docs/Dexie/Dexie.transaction()-(old-version)",
    
    "/docs/Dexie/Dexie.transaction()",
    
    "/docs/Dexie/Dexie.use()",
    
    "/docs/Dexie/Dexie.verno",
    
    "/docs/Dexie/Dexie.version()",
    
    "/docs/Dexie/Dexie.version",
    
    "/docs/Dexie/Dexie.vip()",
    
    "/docs/Dexie/Dexie.waitFor()",
    
    "/cloud/docs/DexieCloudOptions",
    
    "/docs/DexieErrors/DexieError",
    
    "/docs/Download",
    
    "/docs/EntityTable",
    
    "/docs/Tutorial/Getting-started",
    
    "/docs/Tutorial/Hello-World",
    
    "/docs/IndexSpec",
    
    "/docs/Indexable-Type",
    
    "/docs/IndexedDB-on-Safari",
    
    "/cloud/docs/Invite",
    
    "/cloud/docs/Member",
    
    "/docs/Tutorial/Migrating-existing-DB-to-Dexie",
    
    "/docs/MultiEntry-Index",
    
    "/cloud/docs/PersistedSyncState",
    
    "/docs/Promise/Promise.PSD",
    
    "/docs/Promise/Promise.catch()",
    
    "/docs/Promise/Promise.finally()",
    
    "/docs/Promise/Promise",
    
    "/docs/Promise/Promise.on.error",
    
    "/docs/Promise/Promise.onuncatched",
    
    "/docs/Questions-and-Answers",
    
    "/docs/Tutorial/React",
    
    "/cloud/docs/Realm",
    
    "/docs/Releasing-Dexie",
    
    "/cloud/docs/Role",
    
    "/docs/Samples",
    
    "/docs/Simplify-with-yield",
    
    "/docs/StorageManager",
    
    "/docs/Tutorial/Svelte",
    
    "/cloud/docs/SyncState",
    
    "/docs/Table/Table.add()",
    
    "/docs/Table/Table.bulkAdd()",
    
    "/docs/Table/Table.bulkDelete()",
    
    "/docs/Table/Table.bulkGet()",
    
    "/docs/Table/Table.bulkPut()",
    
    "/docs/Table/Table.bulkUpdate()",
    
    "/docs/Table/Table.clear()",
    
    "/docs/Table/Table.count()",
    
    "/docs/Table/Table.defineClass()",
    
    "/docs/Table/Table.delete()",
    
    "/docs/Table/Table.each()",
    
    "/docs/Table/Table.filter()",
    
    "/docs/Table/Table.get()",
    
    "/docs/Table/Table.hook('creating')",
    
    "/docs/Table/Table.hook('deleting')",
    
    "/docs/Table/Table.hook('reading')",
    
    "/docs/Table/Table.hook('updating')",
    
    "/docs/Table/Table.limit()",
    
    "/docs/Table/Table.mapToClass()",
    
    "/docs/Table/Table",
    
    "/docs/Table/Table.name",
    
    "/docs/Table/Table.offset()",
    
    "/docs/Table/Table.orderBy()",
    
    "/docs/Table/Table.put()",
    
    "/docs/Table/Table.reverse()",
    
    "/docs/Table/Table.schema",
    
    "/docs/Table/Table.toArray()",
    
    "/docs/Table/Table.toCollection()",
    
    "/docs/Table/Table.update()",
    
    "/docs/Table/Table.where()",
    
    "/docs/TableSchema",
    
    "/docs/The-Main-Limitations-of-IndexedDB",
    
    "/docs/The-Three-Main-Limitations-of-IndexedDB",
    
    "/docs/Transaction/Transaction.abort()",
    
    "/docs/Transaction/Transaction",
    
    "/docs/Transaction/Transaction.on.abort",
    
    "/docs/Transaction/Transaction.on.complete",
    
    "/docs/Transaction/Transaction.on.error",
    
    "/docs/Transaction/Transaction.table()",
    
    "/docs/Typescript-old",
    
    "/docs/Typescript",
    
    "/docs/Tutorial/Understanding-the-basics",
    
    "/cloud/docs/UserLogin",
    
    "/docs/Version/Version",
    
    "/docs/Version/Version.stores()",
    
    "/docs/Version/Version.upgrade()",
    
    "/docs/Tutorial/Vue",
    
    "/docs/WhereClause/WhereClause.above()",
    
    "/docs/WhereClause/WhereClause.aboveOrEqual()",
    
    "/docs/WhereClause/WhereClause.anyOf()",
    
    "/docs/WhereClause/WhereClause.anyOfIgnoreCase()",
    
    "/docs/WhereClause/WhereClause.below()",
    
    "/docs/WhereClause/WhereClause.belowOrEqual()",
    
    "/docs/WhereClause/WhereClause.between()",
    
    "/docs/WhereClause/WhereClause.equals()",
    
    "/docs/WhereClause/WhereClause.equalsIgnoreCase()",
    
    "/docs/WhereClause/WhereClause.inAnyRange()",
    
    "/docs/WhereClause/WhereClause",
    
    "/docs/WhereClause/WhereClause.noneOf()",
    
    "/docs/WhereClause/WhereClause.notEqual()",
    
    "/docs/WhereClause/WhereClause.startsWith()",
    
    "/docs/WhereClause/WhereClause.startsWithAnyOf()",
    
    "/docs/WhereClause/WhereClause.startsWithAnyOfIgnoreCase()",
    
    "/docs/WhereClause/WhereClause.startsWithIgnoreCase()",
    
    "/cloud/docs/access-control",
    
    "/docs/PropModification/add()",
    
    "/cloud/docs/add-demo-users",
    
    "/cloud/docs/add-public-data",
    
    "/cloud/docs/authentication",
    
    "/cloud/docs/best-practices",
    
    "/cloud/docs/cli",
    
    "/cloud/docs/consistency",
    
    "/contact",
    
    "/cloud/docs/custom-emails",
    
    "/cloud/docs/db.cloud.configure()",
    
    "/cloud/docs/db.cloud.currentUser",
    
    "/cloud/docs/db.cloud.currentUserId",
    
    "/cloud/docs/db.cloud.events.syncComplete",
    
    "/cloud/docs/db.cloud.invites",
    
    "/cloud/docs/db.cloud.login()",
    
    "/cloud/docs/db.cloud.logout()",
    
    "/cloud/docs/db.cloud.options",
    
    "/cloud/docs/db.cloud.permissions()",
    
    "/cloud/docs/db.cloud.persistedSyncState",
    
    "/cloud/docs/db.cloud.roles",
    
    "/cloud/docs/db.cloud.schema",
    
    "/cloud/docs/db.cloud.sync()",
    
    "/cloud/docs/db.cloud.syncState",
    
    "/cloud/docs/db.cloud.userInteraction",
    
    "/cloud/docs/db.cloud.usingServiceWorker",
    
    "/cloud/docs/db.cloud.version",
    
    "/cloud/docs/db.cloud.webSocketStatus",
    
    "/cloud/docs/db.members",
    
    "/cloud/docs/db.realms",
    
    "/cloud/docs/db.roles",
    
    "/docs/Syncable/db.syncable.connect()",
    
    "/docs/Syncable/db.syncable.delete()",
    
    "/docs/Syncable/db.syncable.disconnect()",
    
    "/docs/Syncable/db.syncable.getOptions()",
    
    "/docs/Syncable/db.syncable.getStatus()",
    
    "/docs/Syncable/db.syncable.list()",
    
    "/docs/Syncable/db.syncable.on('statusChanged')",
    
    "/docs/Syncable/db.syncable.setFilter()",
    
    "/cloud/docs/dexie-cloud-addon",
    
    "/cloud/docs/dexie-cloud-api",
    
    "/roadmap/dexie-cloud",
    
    "/docs/ExportImport/dexie-export-import",
    
    "/docs/libs/dexie-react-hooks",
    
    "/roadmap/dexie5.0",
    
    "/docs/inbound",
    
    "/cloud/docs/",
    
    "/cloud/",
    
    "/roadmap/",
    
    "/docs/Tutorial/",
    
    "/docs/",
    
    "/cloud/docs/limits",
    
    "/docs/liveQuery()",
    
    "/cloud/docs/premium-software",
    
    "/cloud/pricing",
    
    "/cloud/privacy",
    
    "/privacy",
    
    "/cloud/purchase/production",
    
    "/docs/PropModification/remove()",
    
    "/docs/PropModification/replacePrefix()",
    
    "/cloud/docs/rest-api",
    
    "/cloud/docs/scaling",
    
    "/cloud/server-software-license-terms",
    
    "/stop-the-war",
    
    "/cloud/terms",
    
    "/docs/Promise/unhandledrejection-event",
    
    "/docs/dexie-react-hooks/useLiveQuery()",
    
    "/docs/dexie-react-hooks/useObservable()",
    
    "/docs/dexie-react-hooks/usePermissions()",
    
    "/cloud/docs/web-hooks",
    
    "/docs/safari-issues",
    
    "/",
    

    
    "/.well-known/assetlinks.json",
    
    "/CNAME",
    
    "/Gemfile",
    
    "/Gemfile.lock",
    
    "/LICENSE",
    
    "/README.md",
    
    "/assets/css/bootstrap-theme.css",
    
    "/assets/css/bootstrap-theme.css.map",
    
    "/assets/css/bootstrap-theme.min.css",
    
    "/assets/css/bootstrap.css",
    
    "/assets/css/bootstrap.css.map",
    
    "/assets/css/bootstrap.min.css",
    
    "/assets/css/docs.css",
    
    "/assets/css/font-awesome.min.css",
    
    "/assets/css/prism-2020.css",
    
    "/assets/css/prism-ghcolors.css",
    
    "/assets/css/prism-solarized-light.css",
    
    "/assets/css/prism-tomorrow-night.css",
    
    "/assets/css/prism-vscode-dark.css",
    
    "/assets/css/prism.css",
    
    "/assets/css/stylesheet.css",
    
    "/assets/fonts/FontAwesome.otf",
    
    "/assets/fonts/fontawesome-webfont.eot",
    
    "/assets/fonts/fontawesome-webfont.svg",
    
    "/assets/fonts/fontawesome-webfont.ttf",
    
    "/assets/fonts/fontawesome-webfont.woff",
    
    "/assets/fonts/glyphicons-halflings-regular.eot",
    
    "/assets/fonts/glyphicons-halflings-regular.svg",
    
    "/assets/fonts/glyphicons-halflings-regular.ttf",
    
    "/assets/fonts/glyphicons-halflings-regular.woff",
    
    "/assets/images/CodeSandBox.png",
    
    "/assets/images/CodeSandBoxDeps.png",
    
    "/assets/images/React-icon.svg",
    
    "/assets/images/Svelte_Logo.svg",
    
    "/assets/images/angular.svg",
    
    "/assets/images/bg.png",
    
    "/assets/images/browserstack-logo-fit-text.png",
    
    "/assets/images/browserstack-logo-fullsize.png",
    
    "/assets/images/builtwith-icon.ico",
    
    "/assets/images/cookie-32.png",
    
    "/assets/images/david-linkedin.jpeg",
    
    "/assets/images/david-linkedin2.jpg",
    
    "/assets/images/dexie-cloud/logo-dexie-cloud-dark-gray.png",
    
    "/assets/images/dexie-cloud/logo-dexie-cloud-dark-gray.svg",
    
    "/assets/images/dexie-cloud/logo-dexie-cloud.png",
    
    "/assets/images/dexie-cloud/logo-dexie-cloud.svg",
    
    "/assets/images/dexie-cloud/norrsken-cropped-compressed.jpg",
    
    "/assets/images/dexie-icon-192x192.png",
    
    "/assets/images/dexie-icon-512x512.png",
    
    "/assets/images/dexie-icon-64x64.gif",
    
    "/assets/images/dexie-icon-64x64.png",
    
    "/assets/images/dexie-logo-icon-black.svg",
    
    "/assets/images/dexie-logo-icon-menu-dark-bkgimg.svg",
    
    "/assets/images/dexie-logo-icon-menu-dark-img.svg",
    
    "/assets/images/dexie-logo-icon-menu.svg",
    
    "/assets/images/dexie-logo-icon.png",
    
    "/assets/images/dexie-logo-icon.svg",
    
    "/assets/images/dexie-logo.png",
    
    "/assets/images/disc.jpg",
    
    "/assets/images/download-button.png",
    
    "/assets/images/ellipsis-loader.svg",
    
    "/assets/images/favicon-db.png",
    
    "/assets/images/favicon-yuri.png",
    
    "/assets/images/favicon.pdn",
    
    "/assets/images/favicon.png",
    
    "/assets/images/favicon2.png",
    
    "/assets/images/favicon3.png",
    
    "/assets/images/favicon3b.png",
    
    "/assets/images/fireworks.png",
    
    "/assets/images/flightradar24.svg",
    
    "/assets/images/github-desktop-icon.svg",
    
    "/assets/images/github.svg",
    
    "/assets/images/lambdatest.png",
    
    "/assets/images/lambdatest2.png",
    
    "/assets/images/logo-dexie-black.svg",
    
    "/assets/images/logo-dexie.png",
    
    "/assets/images/logo-dexie.svg",
    
    "/assets/images/loom.ico",
    
    "/assets/images/memex-icon.png",
    
    "/assets/images/microsoft-todo.ico",
    
    "/assets/images/open-white.png",
    
    "/assets/images/svelte-logo-horizontal.svg",
    
    "/assets/images/tested-with-browserstack.png",
    
    "/assets/images/tested-with-browserstack2.png",
    
    "/assets/images/testimonials/albarin.jpg",
    
    "/assets/images/testimonials/bennie.jpg",
    
    "/assets/images/testimonials/dusty.jpg",
    
    "/assets/images/testimonials/dusty2.jpeg",
    
    "/assets/images/testimonials/naton.jpg",
    
    "/assets/images/testimonials/naton2.jpeg",
    
    "/assets/images/totodo.ico",
    
    "/assets/images/ukraine-flag.png",
    
    "/assets/images/vue.svg",
    
    "/assets/images/w3techs-icon.ico",
    
    "/assets/images/whatsapp.png",
    
    "/assets/images/wire-icon.ico",
    
    "/assets/images/wrench-294035_640.png",
    
    "/assets/js/anime.min.js",
    
    "/assets/js/bootstrap.js",
    
    "/assets/js/bootstrap.min.js",
    
    "/assets/js/form-prompts.js",
    
    "/assets/js/highlight-anchors.js",
    
    "/assets/js/jquery.min.js",
    
    "/assets/js/lazyload.min.js",
    
    "/assets/js/npm.js",
    
    "/assets/js/offline-switch.js",
    
    "/assets/js/parallax.min.js",
    
    "/assets/js/prism-2020.js",
    
    "/assets/js/prism-2024.js",
    
    "/assets/js/prism-highlight.js",
    
    "/assets/js/prism-svelte.js",
    
    "/assets/js/prism.js",
    
    "/assets/js/scroll-to-anchor.js",
    
    "/assets/js/shoutouts.js",
    
    "/assets/js/ukraine2.js",
    
    "/cloud/docs/email-settings.png",
    
    "/cloud/docs/webhook-unknownuser.png",
    
    "/docs/safari-issues.md",
    
    "/googlef37fd828a301ac31.html",
    
    "/ignore-analytics.html",
    
    "/index.md",
    
    "/manifest.webmanifest",
    
    "/test/dexie-issue-565/dexie.js",
    
    "/test/dexie-issue-565/index.html",
    
    "/test/dexie-issue-565/worker.js",
    
    "/test/dexie-issue-565/worker2.js",
    
    "/test/dexie-issue-594/index.html",
    
    "/test/firefox-bug-binary-keys/index.html",
    
    "/test/firefox-bug-binary-keys/test.js",
    
    "/test/safari-dbname-constraints/index.html",
    
].filter(file =>
    !file.startsWith("/test") &&
    !file.includes("analytics.js") &&
    !file.endsWith(".sh") &&
    !file.startsWith("/assets/movies/"));

const CACHE_NAME = 'dexiejs-offline-cache';

async function waitForAll(promises){
    return new Promise( resolve => {
        let rc = { success: 0, failure:0 };
        for (let i=0; i < promises.length; i++) {
            promises[i]
            .then(()=>{
                rc.success++;
                if (rc.success+rc.failure === promises.length) resolve(rc);
            }).catch(err => {
                rc.failure++;
                if (rc.success+rc.failure === promises.length) resolve(rc);
                console.error(`error occurred ${err}`);
            });
        }
    });
}

/*
function isCurrentSite(url){
    const u  = new URL(url);
    if (self.location.origin === u.origin){
        return true;
    }
    return false;
}

function shortIfLocal(url){
    const u  = new URL(url);
    if (isCurrentSite(u)) {
        return u.pathname;
    }
    return u.href;
}

function correctUrlForLocal(url){
    // try to construct url
    let temp;
    try{
       temp = new URL(url);
    } catch (err) {
        try {
            temp = new URL(self.location.origin+url);
        }
        catch(err2){
            temp = undefined;
        }
    } 
    if (!temp) return url;   
    if (!isCurrentSite(temp)) return temp;
    temp.pathname = temp.pathname.replace(/\/$/,'');
    return temp;
}*/

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.delete(CACHE_NAME)
        .then(() => caches.open(CACHE_NAME))
        .then(async cache => {
            console.log('Opened cache');
            const leadingSlashRemoved = raw.map(url => url);
            do {
                // cache in batches of 10
                const sliceDice = leadingSlashRemoved.splice(0, 50);
                await waitForAll(sliceDice.map(async url => {
                    const response = await fetch(url);
                    console.log("URL", url, response);
                    await cache.put(url, response);
                }));
            } while(leadingSlashRemoved.length > 0);
            return true;
        })
    );
});

const MAX_WAIT = 300; // If network responds slower than 100 ms, respond with cache instead

self.addEventListener('fetch', function (event) {
    const request = event.request;
    // Don't take over if it's not a GET, HEAD or OPTIONS request
    if (request.method !== 'GET' && request.method !== "HEAD" && request.method !== "OPTIONS") return;
    // Don't cache google analytics requests:
    if (/google-analytics/.test(request.url)) return;

    // Start reading from cache
    const cachedResponsePromise = caches.match(request, {ignoreVary: true});
    const fetchPromise = fetch(request);
    let timeoutHandle;
    const timeoutPromise = new Promise(resolve => {
        timeoutHandle = setTimeout(()=>{
            timeoutHandle = null;
            resolve("timedout");
        }, MAX_WAIT)
    });
    // Start fetching in parallell
    event.respondWith(Promise.race([fetchPromise, timeoutPromise]).then(async res => {
        if (timeoutHandle) clearTimeout(timeoutHandle);
        // Fetch successful, probably online. See if we also have the cached response:
        const cachedResponse = await cachedResponsePromise.catch(err => null);
        if (res === "timedout" || !res.ok) {
            // Fetch didn't throw but the result wasn't ok either.
            // Could be timeout, a 404, 500 or maybe offline?
            // In case we have an OK response in the cache, respond with that one instead:
            if (cachedResponse && cachedResponse.ok) {
                // Respond from cache.
                // But in parallell, update the cache once the slow response arrives (if it is successful and newer)
                if (res === "timedout") {
                    console.debug("URL", request.url, "timedout. Serving it from cache but also update cache once slow response arrives");
                    event.waitUntil(fetchPromise.then(async res => {
                        if (!res.ok) return;
                        await updateCache(request, res, cachedResponse);
                    }).catch(err => null));
                }
                return cachedResponse;
            } else if (res === "timedout") {
                // We don't have anything in cache. Wait for fetch even if it takes time.
                res = await fetchPromise;
                if (!res.ok) {
                    // Response not successful. Respond with it without trying to cache it.
                    return res;
                }
                // else, the slow response was successful. Let it continue further down
                // so we can cache this slow response.
            } else {
                // res not ok. Don't cache it but return it.
                return res;
            }
        }

        // We come here if the real fetch was successful.
        event.waitUntil(updateCache(request, res, cachedResponse));
        return res;
    }, async error => {
        const cachedResponse = await cachedResponsePromise.catch(err => null);
        console.debug("sw: Finding in cache:", request.url, cachedResponse);
        console.debug("sw: ok?:", cachedResponse && cachedResponse.ok);
        if (cachedResponse && cachedResponse.ok) {
            return cachedResponse;
        }
        throw error;
    }));
});

async function updateCache(request, res, currentCachedRes) {
    // Should we update the cache with this fresh version?
    let cachedLastMod = currentCachedRes && currentCachedRes.headers.get("last-modified");
    if (!cachedLastMod || (cachedLastMod !== res.headers.get("last-modified"))) {
        // There were no cached response, or no "last-modified", or "last-modified" headers was changed - keep the cache up-to-date,
        // so that, when the user goes offline, it will have the latest and greatest, and not revert to old versions
        const clonedResponse = res.clone();
        const cache = await caches.open(CACHE_NAME);
        await cache.put(request, clonedResponse);
    }
}
