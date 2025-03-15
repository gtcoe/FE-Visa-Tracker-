(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/app_manage-clients_[id]_page_tsx_0bccf499._.js", {

"[project]/app/manage-clients/[id]/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@/components/ManageClients/ClientDetails'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
// Sample client data for demonstration
const sampleClients = [
    {
        id: '1',
        type: 1,
        name: 'ABC Corporation',
        address: 'PlotNo 58, Regent Gateway, Doddanakundi Village',
        branches: 'Kiadb Industrial Area, Itpl Roa',
        ownerName: 'Sahil',
        ownerPhone: '+91 9898989898',
        ownerEmail: 'sahil.dua@gmail.com',
        country: 'India',
        state: 'Karnataka',
        city: 'Bangalore',
        zipCode: '560048',
        gstNo: '56252686926',
        billingCycle: 'Monthly',
        spokeName: 'Kartik',
        spokePhone: '+91 9898989898',
        spokeEmail: 'kartik.chopra@gmail.com'
    },
    {
        id: '2',
        type: 2,
        name: 'XYZ Corporate',
        address: 'xyz/b block Dwarka',
        branches: 'Delhi',
        ownerName: 'Shiv Kumar',
        ownerPhone: '+91 9898989898',
        ownerEmail: 'shivkumar@gmail.com',
        country: 'India',
        state: 'Delhi',
        city: 'New Delhi',
        zipCode: '110075',
        gstNo: '29GGGGG1314R9Z6',
        billingCycle: 'Quarterly'
    }
];
const ClientDetailsPage = ()=>{
    _s();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const [client, setClient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ClientDetailsPage.useEffect": ()=>{
            // In a real application, you would fetch the client data from an API
            // For this example, we're using the sample data
            const clientId = params.id;
            const foundClient = sampleClients.find({
                "ClientDetailsPage.useEffect.foundClient": (c)=>c.id === clientId
            }["ClientDetailsPage.useEffect.foundClient"]);
            // Simulate API call delay
            setTimeout({
                "ClientDetailsPage.useEffect": ()=>{
                    setClient(foundClient || null);
                    setLoading(false);
                }
            }["ClientDetailsPage.useEffect"], 500);
        }
    }["ClientDetailsPage.useEffect"], [
        params.id
    ]);
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-center items-center min-h-screen",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "animate-pulse flex flex-col items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-12 w-12 rounded-full bg-gray-200 mb-4"
                    }, void 0, false, {
                        fileName: "[project]/app/manage-clients/[id]/page.tsx",
                        lineNumber: 69,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-4 w-32 bg-gray-200 rounded"
                    }, void 0, false, {
                        fileName: "[project]/app/manage-clients/[id]/page.tsx",
                        lineNumber: 70,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/manage-clients/[id]/page.tsx",
                lineNumber: 68,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/manage-clients/[id]/page.tsx",
            lineNumber: 67,
            columnNumber: 7
        }, this);
    }
    if (!client) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-2xl font-bold text-[#1C1C1C] mb-6",
                    children: "Client Details"
                }, void 0, false, {
                    fileName: "[project]/app/manage-clients/[id]/page.tsx",
                    lineNumber: 79,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-lg border border-[#E6EAF2] shadow-sm p-6",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-center text-gray-500",
                        children: "Client not found"
                    }, void 0, false, {
                        fileName: "[project]/app/manage-clients/[id]/page.tsx",
                        lineNumber: 81,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/manage-clients/[id]/page.tsx",
                    lineNumber: 80,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/manage-clients/[id]/page.tsx",
            lineNumber: 78,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ClientDetails, {
        client: client
    }, void 0, false, {
        fileName: "[project]/app/manage-clients/[id]/page.tsx",
        lineNumber: 87,
        columnNumber: 10
    }, this);
};
_s(ClientDetailsPage, "iciPs/IK83sGP/1oWjxYa1xJUfk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"]
    ];
});
_c = ClientDetailsPage;
const __TURBOPACK__default__export__ = ClientDetailsPage;
var _c;
__turbopack_context__.k.register(_c, "ClientDetailsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=app_manage-clients_%5Bid%5D_page_tsx_0bccf499._.js.map