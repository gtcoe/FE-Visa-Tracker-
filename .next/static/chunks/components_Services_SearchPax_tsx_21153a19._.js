(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/components_Services_SearchPax_tsx_21153a19._.js", {

"[project]/components/Services/SearchPax.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
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
    const e = new Error("Cannot find module 'lodash/debounce'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
// Lazy load all tab components for code splitting
const FillServiceForm = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lazy"])(()=>__turbopack_context__.r("[project]/components/Services/FillServiceForm.tsx [app-client] (ecmascript, async loader)")(__turbopack_context__.i));
_c = FillServiceForm;
const SearchPaxContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lazy"])(()=>(()=>{
        const e = new Error("Cannot find module './SearchPaxContent'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
    })());
_c1 = SearchPaxContent;
const ServiceRequestSummary = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lazy"])(()=>(()=>{
        const e = new Error("Cannot find module './ServiceRequestSummary'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
    })());
_c2 = ServiceRequestSummary;
// Create a placeholder loading component
const LoadingFallback = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-6 flex justify-center items-center min-h-[300px]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "animate-pulse flex flex-col items-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-12 w-12 rounded-full bg-gray-200 mb-4"
                }, void 0, false, {
                    fileName: "[project]/components/Services/SearchPax.tsx",
                    lineNumber: 17,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-4 w-32 bg-gray-200 rounded"
                }, void 0, false, {
                    fileName: "[project]/components/Services/SearchPax.tsx",
                    lineNumber: 18,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Services/SearchPax.tsx",
            lineNumber: 16,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Services/SearchPax.tsx",
        lineNumber: 15,
        columnNumber: 3
    }, this);
_c3 = LoadingFallback;
const SearchPax = ()=>{
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [searchData, setSearchData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        paxName: '',
        passportNo: '',
        referenceNo: ''
    });
    const [isSearching, setIsSearching] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('search');
    const [tabsToPreload, setTabsToPreload] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // Preload tabs that are likely to be used next
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SearchPax.useEffect": ()=>{
            // Preload the adjacent tabs
            const preloadAdjacentTabs = {
                "SearchPax.useEffect.preloadAdjacentTabs": ()=>{
                    if (activeTab === 'search') {
                        __turbopack_context__.r("[project]/components/Services/FillServiceForm.tsx [app-client] (ecmascript, async loader)")(__turbopack_context__.i); // Preload the next tab
                    } else if (activeTab === 'fill') {
                        (()=>{
                            const e = new Error("Cannot find module './ServiceRequestSummary'");
                            e.code = 'MODULE_NOT_FOUND';
                            throw e;
                        })(); // Preload the next tab
                    }
                }
            }["SearchPax.useEffect.preloadAdjacentTabs"];
            // Delay preloading to not compete with current tab rendering
            const timer = setTimeout(preloadAdjacentTabs, 1000);
            return ({
                "SearchPax.useEffect": ()=>clearTimeout(timer)
            })["SearchPax.useEffect"];
        }
    }["SearchPax.useEffect"], [
        activeTab
    ]);
    // Optimize handlers with useCallback to prevent unnecessary re-renders
    const handleChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SearchPax.useCallback[handleChange]": (e)=>{
            const { name, value } = e.target;
            setSearchData({
                "SearchPax.useCallback[handleChange]": (prev)=>({
                        ...prev,
                        [name]: value
                    })
            }["SearchPax.useCallback[handleChange]"]);
        }
    }["SearchPax.useCallback[handleChange]"], []);
    // Debounced search function to reduce unnecessary API calls
    const debouncedSearch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])(debounce({
        "SearchPax.useCallback[debouncedSearch]": async (data)=>{
            try {
                // Actual API call would go here
                console.log('Searching with data:', data);
                await new Promise({
                    "SearchPax.useCallback[debouncedSearch]": (resolve)=>setTimeout(resolve, 500)
                }["SearchPax.useCallback[debouncedSearch]"]);
                console.log('Search completed');
            } catch (error) {
                console.error('Error searching for pax:', error);
            } finally{
                setIsSearching(false);
            }
        }
    }["SearchPax.useCallback[debouncedSearch]"], 300), []);
    const handleSearch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SearchPax.useCallback[handleSearch]": async (e)=>{
            if (e) e.preventDefault();
            setIsSearching(true);
            debouncedSearch(searchData);
        }
    }["SearchPax.useCallback[handleSearch]"], [
        searchData,
        debouncedSearch
    ]);
    const handleClear = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SearchPax.useCallback[handleClear]": ()=>{
            setSearchData({
                paxName: '',
                passportNo: '',
                referenceNo: ''
            });
        }
    }["SearchPax.useCallback[handleClear]"], []);
    // Handle tab change with preloading
    const handleTabChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SearchPax.useCallback[handleTabChange]": (tab)=>{
            setActiveTab(tab);
        }
    }["SearchPax.useCallback[handleTabChange]"], []);
    // Tab hover handler to initiate preloading
    const handleTabHover = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SearchPax.useCallback[handleTabHover]": (tab)=>{
            if (tab !== activeTab && !tabsToPreload.includes(tab)) {
                setTabsToPreload({
                    "SearchPax.useCallback[handleTabHover]": (prev)=>[
                            ...prev,
                            tab
                        ]
                }["SearchPax.useCallback[handleTabHover]"]);
                // Dynamically import the component when user hovers
                if (tab === 'fill') {
                    __turbopack_context__.r("[project]/components/Services/FillServiceForm.tsx [app-client] (ecmascript, async loader)")(__turbopack_context__.i);
                } else if (tab === 'summary') {
                    (()=>{
                        const e = new Error("Cannot find module './ServiceRequestSummary'");
                        e.code = 'MODULE_NOT_FOUND';
                        throw e;
                    })();
                } else if (tab === 'search') {
                    (()=>{
                        const e = new Error("Cannot find module './SearchPaxContent'");
                        e.code = 'MODULE_NOT_FOUND';
                        throw e;
                    })();
                }
            }
        }
    }["SearchPax.useCallback[handleTabHover]"], [
        activeTab,
        tabsToPreload
    ]);
    // Function to render the appropriate content based on the active tab
    const renderTabContent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SearchPax.useCallback[renderTabContent]": ()=>{
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
                fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LoadingFallback, {}, void 0, false, {
                    fileName: "[project]/components/Services/SearchPax.tsx",
                    lineNumber: 114,
                    columnNumber: 27
                }, void 0),
                children: [
                    activeTab === 'search' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SearchPaxContent, {
                        searchData: searchData,
                        setSearchData: setSearchData,
                        handleChange: handleChange,
                        handleSearch: handleSearch,
                        handleClear: handleClear,
                        isSearching: isSearching
                    }, void 0, false, {
                        fileName: "[project]/components/Services/SearchPax.tsx",
                        lineNumber: 116,
                        columnNumber: 11
                    }, this),
                    activeTab === 'fill' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FillServiceForm, {}, void 0, false, {
                        fileName: "[project]/components/Services/SearchPax.tsx",
                        lineNumber: 126,
                        columnNumber: 34
                    }, this),
                    activeTab === 'summary' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ServiceRequestSummary, {}, void 0, false, {
                        fileName: "[project]/components/Services/SearchPax.tsx",
                        lineNumber: 128,
                        columnNumber: 37
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Services/SearchPax.tsx",
                lineNumber: 114,
                columnNumber: 7
            }, this);
        }
    }["SearchPax.useCallback[renderTabContent]"], [
        activeTab,
        searchData,
        handleChange,
        handleSearch,
        handleClear,
        isSearching
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "py-6 px-[80px]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-[28px] font-bold text-[#1C1C1C] mb-6",
                children: "Service Request Form"
            }, void 0, false, {
                fileName: "[project]/components/Services/SearchPax.tsx",
                lineNumber: 135,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-2xl border border-[#E6EAF2] shadow-sm overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex border-b border-gray-200",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `px-6 py-5 font-medium text-base cursor-pointer ${activeTab === 'search' ? 'text-[#0B498B] border-b-[3px] border-[#0B498B] font-semibold' : 'text-gray-600'}`,
                                onClick: ()=>handleTabChange('search'),
                                onMouseEnter: ()=>handleTabHover('search'),
                                children: "Search Pax"
                            }, void 0, false, {
                                fileName: "[project]/components/Services/SearchPax.tsx",
                                lineNumber: 141,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `px-6 py-5 font-medium text-base cursor-pointer ${activeTab === 'fill' ? 'text-[#0B498B] border-b-[3px] border-[#0B498B] font-semibold' : 'text-gray-600'}`,
                                onClick: ()=>handleTabChange('fill'),
                                onMouseEnter: ()=>handleTabHover('fill'),
                                children: "Fill Online Service Request Form"
                            }, void 0, false, {
                                fileName: "[project]/components/Services/SearchPax.tsx",
                                lineNumber: 148,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `px-6 py-5 font-medium text-base cursor-pointer ${activeTab === 'summary' ? 'text-[#0B498B] border-b-[3px] border-[#0B498B] font-semibold' : 'text-gray-600'}`,
                                onClick: ()=>handleTabChange('summary'),
                                onMouseEnter: ()=>handleTabHover('summary'),
                                children: "Service Request Summary"
                            }, void 0, false, {
                                fileName: "[project]/components/Services/SearchPax.tsx",
                                lineNumber: 155,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Services/SearchPax.tsx",
                        lineNumber: 140,
                        columnNumber: 9
                    }, this),
                    renderTabContent()
                ]
            }, void 0, true, {
                fileName: "[project]/components/Services/SearchPax.tsx",
                lineNumber: 138,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Services/SearchPax.tsx",
        lineNumber: 134,
        columnNumber: 5
    }, this);
};
_s(SearchPax, "i+Q2WkTv6du5GD8A7hk+3vGUGTY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c4 = SearchPax;
const __TURBOPACK__default__export__ = /*#__PURE__*/ _c5 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].memo(SearchPax);
var _c, _c1, _c2, _c3, _c4, _c5;
__turbopack_context__.k.register(_c, "FillServiceForm");
__turbopack_context__.k.register(_c1, "SearchPaxContent");
__turbopack_context__.k.register(_c2, "ServiceRequestSummary");
__turbopack_context__.k.register(_c3, "LoadingFallback");
__turbopack_context__.k.register(_c4, "SearchPax");
__turbopack_context__.k.register(_c5, "%default%");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=components_Services_SearchPax_tsx_21153a19._.js.map