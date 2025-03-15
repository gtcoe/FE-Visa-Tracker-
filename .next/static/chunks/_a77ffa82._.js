(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/_a77ffa82._.js", {

"[project]/components/ManageClients/ClientsTable.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const ClientsTable = ({ clients })=>{
    const getClientType = (type)=>{
        return type === 1 ? 'Corporate' : 'Agent';
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "overflow-x-auto",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "inline-block min-w-full border border-[#E6EAF2] rounded-[16px] overflow-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                    className: "min-w-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                            className: "bg-[#F9FAFB]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                className: "border-b border-[#E6EAF2]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "text-center py-3 text-[#696969] text-xs font-medium px-6 border-r border-[#E6EAF2] w-[10%] tracking-[0.03em] first:rounded-tl-[16px] last:rounded-tr-[16px]",
                                        children: "TYPE"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ManageClients/ClientsTable.tsx",
                                        lineNumber: 20,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "text-center py-3 text-[#696969] text-xs font-medium px-6 border-r border-[#E6EAF2] w-[15%] tracking-[0.03em]",
                                        children: "CLIENT NAME"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ManageClients/ClientsTable.tsx",
                                        lineNumber: 21,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "text-center py-3 text-[#696969] text-xs font-medium px-6 border-r border-[#E6EAF2] w-[20%] tracking-[0.03em]",
                                        children: "ADDRESS"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ManageClients/ClientsTable.tsx",
                                        lineNumber: 22,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "text-center py-3 text-[#696969] text-xs font-medium px-6 border-r border-[#E6EAF2] w-[10%] tracking-[0.03em]",
                                        children: "BRANCHES"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ManageClients/ClientsTable.tsx",
                                        lineNumber: 23,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "text-center py-3 text-[#696969] text-xs font-medium px-6 border-r border-[#E6EAF2] w-[15%] tracking-[0.03em]",
                                        children: "OWNER NAME"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ManageClients/ClientsTable.tsx",
                                        lineNumber: 24,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "text-center py-3 text-[#696969] text-xs font-medium px-6 border-r border-[#E6EAF2] w-[15%] tracking-[0.03em]",
                                        children: "OWNER PHONE"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ManageClients/ClientsTable.tsx",
                                        lineNumber: 25,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "text-center py-3 text-[#696969] text-xs font-medium px-6 w-[15%] tracking-[0.03em] ",
                                        children: "OWNER EMAIL ID"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ManageClients/ClientsTable.tsx",
                                        lineNumber: 26,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ManageClients/ClientsTable.tsx",
                                lineNumber: 19,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/ManageClients/ClientsTable.tsx",
                            lineNumber: 18,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                            children: clients.map((client, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    className: "border-b border-[#E6EAF2] last:border-b-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "text-center py-4 text-xs font-medium px-6 border-r border-[#E6EAF2] text-[#1C1C1C]",
                                            children: getClientType(client.type)
                                        }, void 0, false, {
                                            fileName: "[project]/components/ManageClients/ClientsTable.tsx",
                                            lineNumber: 32,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "text-center py-4 text-xs font-medium px-6 border-r border-[#E6EAF2] text-[#1C1C1C]",
                                            children: client.name
                                        }, void 0, false, {
                                            fileName: "[project]/components/ManageClients/ClientsTable.tsx",
                                            lineNumber: 35,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "text-center py-4 text-xs font-medium px-6 border-r border-[#E6EAF2] text-[#1C1C1C]",
                                            children: client.address
                                        }, void 0, false, {
                                            fileName: "[project]/components/ManageClients/ClientsTable.tsx",
                                            lineNumber: 38,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "text-center py-4 text-xs font-medium px-6 border-r border-[#E6EAF2] text-[#1C1C1C]",
                                            children: client.branches
                                        }, void 0, false, {
                                            fileName: "[project]/components/ManageClients/ClientsTable.tsx",
                                            lineNumber: 41,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "text-center py-4 text-xs font-medium px-6 border-r border-[#E6EAF2] text-[#1C1C1C]",
                                            children: client.ownerName
                                        }, void 0, false, {
                                            fileName: "[project]/components/ManageClients/ClientsTable.tsx",
                                            lineNumber: 44,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "text-center py-4 text-xs font-medium px-6 border-r border-[#E6EAF2] text-[#1C1C1C]",
                                            children: client.ownerPhone
                                        }, void 0, false, {
                                            fileName: "[project]/components/ManageClients/ClientsTable.tsx",
                                            lineNumber: 47,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "text-center py-4 text-xs font-medium px-6 text-[#1C1C1C]",
                                            children: client.ownerEmail
                                        }, void 0, false, {
                                            fileName: "[project]/components/ManageClients/ClientsTable.tsx",
                                            lineNumber: 50,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, client.id || index, true, {
                                    fileName: "[project]/components/ManageClients/ClientsTable.tsx",
                                    lineNumber: 31,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/ManageClients/ClientsTable.tsx",
                            lineNumber: 29,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ManageClients/ClientsTable.tsx",
                    lineNumber: 17,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ManageClients/ClientsTable.tsx",
                lineNumber: 16,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/ManageClients/ClientsTable.tsx",
            lineNumber: 15,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ManageClients/ClientsTable.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
};
_c = ClientsTable;
const __TURBOPACK__default__export__ = ClientsTable;
var _c;
__turbopack_context__.k.register(_c, "ClientsTable");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/common/DropdownArrow.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const DropdownArrow = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "12",
        height: "7",
        viewBox: "0 0 12 7",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M0.861278 0.52827C1.12163 0.26792 1.54374 0.26792 1.80409 0.52827L5.99935 4.72353L10.1946 0.52827C10.455 0.26792 10.8771 0.26792 11.1374 0.52827C11.3978 0.788619 11.3978 1.21073 11.1374 1.47108L6.47075 6.13775C6.34573 6.26277 6.17616 6.33301 5.99935 6.33301C5.82254 6.33301 5.65297 6.26277 5.52795 6.13775L0.861278 1.47108C0.600928 1.21073 0.600928 0.78862 0.861278 0.52827Z",
            fill: "#8A8A8A"
        }, void 0, false, {
            fileName: "[project]/components/common/DropdownArrow.tsx",
            lineNumber: 6,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/common/DropdownArrow.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
};
_c = DropdownArrow;
const __TURBOPACK__default__export__ = DropdownArrow;
var _c;
__turbopack_context__.k.register(_c, "DropdownArrow");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/common/CustomDropdown.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$common$2f$DropdownArrow$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/common/DropdownArrow.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
/**
 * A fully customizable dropdown component
 * @param {Object} props - Component properties
 * @returns {React.ReactElement} Rendered dropdown component
 */ const CustomDropdown = ({ options, value, onChange, name, placeholder = 'Select', placeholderColor = '#6A6A6A', optionColor = '#1C1C1C', className = '', variant = 'default' })=>{
    _s();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const dropdownRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Close dropdown when clicking outside
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CustomDropdown.useEffect": ()=>{
            const handleClickOutside = {
                "CustomDropdown.useEffect.handleClickOutside": (event)=>{
                    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                        setIsOpen(false);
                    }
                }
            }["CustomDropdown.useEffect.handleClickOutside"];
            document.addEventListener('mousedown', handleClickOutside);
            return ({
                "CustomDropdown.useEffect": ()=>{
                    document.removeEventListener('mousedown', handleClickOutside);
                }
            })["CustomDropdown.useEffect"];
        }
    }["CustomDropdown.useEffect"], []);
    const handleSelect = (selectedValue)=>{
        onChange(selectedValue);
        setIsOpen(false);
    };
    const selectedOption = options.find((opt)=>opt.value === value) || {
        label: placeholder,
        value: ''
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: dropdownRef,
        className: `relative w-full ${className}`,
        role: "combobox",
        "aria-expanded": isOpen,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                onClick: ()=>setIsOpen(!isOpen),
                className: `
          w-full 
          px-3 
          py-2 
          border 
          border-[#E6EAF2] 
          rounded-[8px] 
          text-sm 
          cursor-pointer 
          flex 
          items-center 
          justify-between
          transition-all 
          duration-200 
          ease-in-out
          ${isOpen ? 'ring-2 ring-[#0B498B]/20 shadow-sm' : 'hover:border-[#0B498B]/30 hover:shadow-xs'}
        `,
                "aria-haspopup": "listbox",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `
            flex-grow 
            truncate 
            ${value === '' ? 'text-[#6A6A6A]' : 'text-[#1C1C1C]'}
          `,
                        style: {
                            color: value === '' ? placeholderColor : optionColor
                        },
                        children: selectedOption.label
                    }, void 0, false, {
                        fileName: "[project]/components/common/CustomDropdown.tsx",
                        lineNumber: 98,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `
            ml-2 
            transition-transform 
            duration-200 
            ease-in-out 
            ${isOpen ? 'rotate-180' : ''}
          `,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$common$2f$DropdownArrow$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/components/common/CustomDropdown.tsx",
                            lineNumber: 119,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/common/CustomDropdown.tsx",
                        lineNumber: 110,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/common/CustomDropdown.tsx",
                lineNumber: 74,
                columnNumber: 7
            }, this),
            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: " absolute  z-50  w-full  border  border-[#E6EAF2]  rounded-[8px]  mt-1  bg-white  shadow-lg  max-h-60  overflow-auto py-1 ",
                role: "listbox",
                children: options.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        onClick: ()=>handleSelect(option.value),
                        className: `
                px-3 
                py-2 
                cursor-pointer 
                transition-colors 
                duration-150 
                ease-in-out
                ${option.value === value ? 'bg-[#0B498B]/5 text-[#0B498B]' : 'hover:bg-[#F5F5F5] text-[#1C1C1C]'}
              `,
                        role: "option",
                        "aria-selected": option.value === value,
                        children: option.label
                    }, option.value, false, {
                        fileName: "[project]/components/common/CustomDropdown.tsx",
                        lineNumber: 141,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/common/CustomDropdown.tsx",
                lineNumber: 123,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/common/CustomDropdown.tsx",
        lineNumber: 68,
        columnNumber: 5
    }, this);
};
_s(CustomDropdown, "uhOyve9TWk+bvhPJTPlaMsUEQAY=");
_c = CustomDropdown;
const __TURBOPACK__default__export__ = CustomDropdown;
var _c;
__turbopack_context__.k.register(_c, "CustomDropdown");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/common/Toast/index.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "ToastNotifyDark": (()=>ToastNotifyDark),
    "ToastNotifyError": (()=>ToastNotifyError),
    "ToastNotifyInfo": (()=>ToastNotifyInfo),
    "ToastNotifySuccess": (()=>ToastNotifySuccess),
    "ToastNotifyWarning": (()=>ToastNotifyWarning)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-toastify/dist/index.mjs [app-client] (ecmascript)");
;
;
;
const options = {
    hideProgressBar: true,
    position: "bottom-right",
    pauseOnHover: true,
    autoClose: 3000,
    draggable: false
};
const optionsInfo = {
    type: "info",
    ...options
};
const optionsSuccess = {
    type: "success",
    ...options
};
const optionsError = {
    type: "error",
    ...options
};
const optionsWarning = {
    type: "warning",
    ...options
};
const optionsDark = {
    type: "dark",
    ...options
};
const ToastNotifyInfo = (message)=>{
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"])(message, optionsInfo);
};
_c = ToastNotifyInfo;
const ToastNotifySuccess = (message)=>{
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"])(message, optionsSuccess);
};
_c1 = ToastNotifySuccess;
const ToastNotifyError = (message)=>{
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"])(message, optionsError);
};
_c2 = ToastNotifyError;
const ToastNotifyWarning = (message)=>{
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"])(message, optionsWarning);
};
_c3 = ToastNotifyWarning;
const ToastNotifyDark = (message)=>{
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"])(message, optionsDark);
};
_c4 = ToastNotifyDark;
var _c, _c1, _c2, _c3, _c4;
__turbopack_context__.k.register(_c, "ToastNotifyInfo");
__turbopack_context__.k.register(_c1, "ToastNotifySuccess");
__turbopack_context__.k.register(_c2, "ToastNotifyError");
__turbopack_context__.k.register(_c3, "ToastNotifyWarning");
__turbopack_context__.k.register(_c4, "ToastNotifyDark");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/ManageClients/AddClientForm.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$common$2f$CustomDropdown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/common/CustomDropdown.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$common$2f$Toast$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/common/Toast/index.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
const AddClientForm = ({ onSubmit })=>{
    _s();
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        type: 2,
        name: '',
        address: '',
        branches: '',
        ownerName: '',
        ownerPhone: '',
        ownerEmail: '',
        country: '',
        state: '',
        city: '',
        zipCode: '',
        gstNo: '',
        billingCycle: '',
        spokeName: '',
        spokePhone: '',
        spokeEmail: ''
    });
    const handleSubmit = ()=>{
        // Validation
        if (!formData.name) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$common$2f$Toast$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToastNotifyError"])("Client name is required");
            return;
        }
        if (!formData.ownerName) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$common$2f$Toast$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToastNotifyError"])("Owner name is required");
            return;
        }
        if (!formData.ownerEmail) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$common$2f$Toast$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToastNotifyError"])("Owner email is required");
            return;
        }
        onSubmit(formData);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$common$2f$Toast$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToastNotifySuccess"])("Client added successfully");
    };
    const handleDropdownChange = (name)=>(value)=>{
            setFormData((prev)=>({
                    ...prev,
                    [name]: name === 'type' ? Number(value) : value
                }));
        };
    const handleChange = (e)=>{
        const { name, value } = e.target;
        setFormData((prev)=>({
                ...prev,
                [name]: value
            }));
    };
    const typeOptions = [
        {
            value: '1',
            label: 'Corporate'
        },
        {
            value: '2',
            label: 'Agent'
        }
    ];
    const countryOptions = [
        {
            value: '',
            label: 'Select Country'
        },
        {
            value: 'India',
            label: 'India'
        },
        {
            value: 'USA',
            label: 'USA'
        },
        {
            value: 'UK',
            label: 'UK'
        }
    ];
    const stateOptions = [
        {
            value: '',
            label: 'Select State'
        },
        {
            value: 'Delhi',
            label: 'Delhi'
        },
        {
            value: 'Maharashtra',
            label: 'Maharashtra'
        }
    ];
    const cityOptions = [
        {
            value: '',
            label: 'Select City'
        },
        {
            value: 'New Delhi',
            label: 'New Delhi'
        },
        {
            value: 'Mumbai',
            label: 'Mumbai'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-base font-medium mb-4 text-[#1C1C1C]",
                        children: "Client Details"
                    }, void 0, false, {
                        fileName: "[project]/components/ManageClients/AddClientForm.tsx",
                        lineNumber: 91,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-5 gap-x-[25px] gap-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "col-span-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-xs text-[#1C1C1C] mb-2",
                                        children: "Type"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ManageClients/AddClientForm.tsx",
                                        lineNumber: 94,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$common$2f$CustomDropdown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        name: "type",
                                        value: formData.type.toString(),
                                        onChange: handleDropdownChange('type'),
                                        options: typeOptions,
                                        placeholderColor: "#1C1C1C",
                                        optionColor: "#1C1C1C",
                                        className: "w-full",
                                        placeholder: "Select Type"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ManageClients/AddClientForm.tsx",
                                        lineNumber: 95,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ManageClients/AddClientForm.tsx",
                                lineNumber: 93,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "col-span-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-xs text-[#1C1C1C] mb-2",
                                        children: "Client Name"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ManageClients/AddClientForm.tsx",
                                        lineNumber: 108,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        name: "name",
                                        value: formData.name,
                                        onChange: handleChange,
                                        placeholder: "Enter client name",
                                        className: "w-full px-3 py-2 border border-[#E6EAF2] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[#0B498B]/20 focus:border-none text-[#1C1C1C] text-sm"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ManageClients/AddClientForm.tsx",
                                        lineNumber: 109,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ManageClients/AddClientForm.tsx",
                                lineNumber: 107,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "col-span-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-xs text-[#1C1C1C] mb-2",
                                        children: "Address"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ManageClients/AddClientForm.tsx",
                                        lineNumber: 120,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        name: "address",
                                        value: formData.address,
                                        onChange: handleChange,
                                        placeholder: "Enter address",
                                        className: "w-full px-3 py-2 border border-[#E6EAF2] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[#0B498B]/20 focus:border-none text-[#1C1C1C] text-sm"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ManageClients/AddClientForm.tsx",
                                        lineNumber: 121,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ManageClients/AddClientForm.tsx",
                                lineNumber: 119,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "col-span-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-xs text-[#1C1C1C] mb-2 ",
                                        children: "Branches"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ManageClients/AddClientForm.tsx",
                                        lineNumber: 132,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        name: "branches",
                                        value: formData.branches,
                                        onChange: handleChange,
                                        placeholder: "Enter branches",
                                        className: "w-full px-3 py-2 border border-[#E6EAF2] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[#0B498B]/20 focus:border-none text-[#1C1C1C] text-sm"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ManageClients/AddClientForm.tsx",
                                        lineNumber: 133,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ManageClients/AddClientForm.tsx",
                                lineNumber: 131,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "col-span-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-xs text-[#1C1C1C] mb-2",
                                        children: "Country"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ManageClients/AddClientForm.tsx",
                                        lineNumber: 144,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$common$2f$CustomDropdown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        name: "country",
                                        value: formData.country || '',
                                        onChange: handleDropdownChange('country'),
                                        options: countryOptions,
                                        className: "w-full",
                                        placeholder: "Select Country",
                                        placeholderColor: "#6A6A6A",
                                        optionColor: "#1C1C1C"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ManageClients/AddClientForm.tsx",
                                        lineNumber: 145,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ManageClients/AddClientForm.tsx",
                                lineNumber: 143,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "col-span-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-xs text-[#1C1C1C] mb-2",
                                        children: "State"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ManageClients/AddClientForm.tsx",
                                        lineNumber: 158,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$common$2f$CustomDropdown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        name: "state",
                                        value: formData.state || '',
                                        onChange: handleDropdownChange('state'),
                                        options: stateOptions,
                                        className: "w-full",
                                        placeholder: "Select State",
                                        placeholderColor: "#6A6A6A",
                                        optionColor: "#1C1C1C"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ManageClients/AddClientForm.tsx",
                                        lineNumber: 159,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ManageClients/AddClientForm.tsx",
                                lineNumber: 157,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "col-span-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-xs text-[#1C1C1C] mb-2",
                                        children: "City"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ManageClients/AddClientForm.tsx",
                                        lineNumber: 172,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$common$2f$CustomDropdown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        name: "city",
                                        value: formData.city || '',
                                        onChange: handleDropdownChange('city'),
                                        options: cityOptions,
                                        className: "w-full",
                                        placeholder: "Select City",
                                        placeholderColor: "#6A6A6A",
                                        optionColor: "#1C1C1C"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ManageClients/AddClientForm.tsx",
                                        lineNumber: 173,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ManageClients/AddClientForm.tsx",
                                lineNumber: 171,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "col-span-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-xs text-[#1C1C1C] mb-2",
                                        children: "Zip code"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ManageClients/AddClientForm.tsx",
                                        lineNumber: 186,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        name: "zipCode",
                                        value: formData.zipCode,
                                        onChange: handleChange,
                                        placeholder: "Enter zip code",
                                        className: "w-full px-3 py-2 border border-[#E6EAF2] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[#0B498B]/20 focus:border-none text-[#1C1C1C] text-sm"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ManageClients/AddClientForm.tsx",
                                        lineNumber: 187,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ManageClients/AddClientForm.tsx",
                                lineNumber: 185,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "col-span-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-xs text-[#1C1C1C] mb-2",
                                        children: "GST No"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ManageClients/AddClientForm.tsx",
                                        lineNumber: 198,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        name: "gstNo",
                                        value: formData.gstNo,
                                        onChange: handleChange,
                                        placeholder: "Enter GST number",
                                        className: "w-full px-3 py-2 border border-[#E6EAF2] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[#0B498B]/20 focus:border-none text-[#1C1C1C] text-sm"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ManageClients/AddClientForm.tsx",
                                        lineNumber: 199,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ManageClients/AddClientForm.tsx",
                                lineNumber: 197,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "col-span-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-xs text-[#1C1C1C] mb-2",
                                        children: "Billing Cycle"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ManageClients/AddClientForm.tsx",
                                        lineNumber: 210,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        name: "billingCycle",
                                        value: formData.billingCycle,
                                        onChange: handleChange,
                                        placeholder: "Enter email address",
                                        className: "w-full px-3 py-2 border border-[#E6EAF2] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[#0B498B]/20 focus:border-none text-[#1C1C1C] text-sm"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ManageClients/AddClientForm.tsx",
                                        lineNumber: 211,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ManageClients/AddClientForm.tsx",
                                lineNumber: 209,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ManageClients/AddClientForm.tsx",
                        lineNumber: 92,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ManageClients/AddClientForm.tsx",
                lineNumber: 90,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-base font-medium mb-4 text-[#1C1C1C]",
                        children: "Owner Details"
                    }, void 0, false, {
                        fileName: "[project]/components/ManageClients/AddClientForm.tsx",
                        lineNumber: 224,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-5 gap-x-4 gap-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "col-span-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-xs text-[#1C1C1C] mb-2",
                                        children: "Owner Name"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ManageClients/AddClientForm.tsx",
                                        lineNumber: 227,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        name: "ownerName",
                                        value: formData.ownerName,
                                        onChange: handleChange,
                                        placeholder: "Enter owner name",
                                        className: "w-full px-3 py-2 border border-[#E6EAF2] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[#0B498B]/20 focus:border-none text-[#1C1C1C] text-sm"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ManageClients/AddClientForm.tsx",
                                        lineNumber: 228,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ManageClients/AddClientForm.tsx",
                                lineNumber: 226,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "col-span-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-xs text-[#1C1C1C] mb-2",
                                        children: "Owner Phone Number"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ManageClients/AddClientForm.tsx",
                                        lineNumber: 239,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        name: "ownerPhone",
                                        value: formData.ownerPhone,
                                        onChange: handleChange,
                                        placeholder: "Enter phone number",
                                        className: "w-full px-3 py-2 border border-[#E6EAF2] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[#0B498B]/20 focus:border-none text-[#1C1C1C] text-sm"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ManageClients/AddClientForm.tsx",
                                        lineNumber: 240,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ManageClients/AddClientForm.tsx",
                                lineNumber: 238,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "col-span-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-xs text-[#1C1C1C] mb-2",
                                        children: "Owner Email Id"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ManageClients/AddClientForm.tsx",
                                        lineNumber: 251,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "email",
                                        name: "ownerEmail",
                                        value: formData.ownerEmail,
                                        onChange: handleChange,
                                        placeholder: "Enter email address",
                                        className: "w-full px-3 py-2 border border-[#E6EAF2] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[#0B498B]/20 focus:border-none text-[#1C1C1C] text-sm"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ManageClients/AddClientForm.tsx",
                                        lineNumber: 252,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ManageClients/AddClientForm.tsx",
                                lineNumber: 250,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "col-span-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-xs text-[#1C1C1C] mb-2",
                                        children: "Spoke Name"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ManageClients/AddClientForm.tsx",
                                        lineNumber: 263,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        name: "spokeName",
                                        value: formData.spokeName,
                                        onChange: handleChange,
                                        placeholder: "Enter spoke name",
                                        className: "w-full px-3 py-2 border border-[#E6EAF2] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[#0B498B]/20 focus:border-none text-[#1C1C1C] text-sm"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ManageClients/AddClientForm.tsx",
                                        lineNumber: 264,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ManageClients/AddClientForm.tsx",
                                lineNumber: 262,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "col-span-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-xs text-[#1C1C1C] mb-2",
                                        children: "Spoke Phone Number"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ManageClients/AddClientForm.tsx",
                                        lineNumber: 275,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        name: "spokePhone",
                                        value: formData.spokePhone,
                                        onChange: handleChange,
                                        placeholder: "Enter phone number",
                                        className: "w-full px-3 py-2 border border-[#E6EAF2] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[#0B498B]/20 focus:border-none text-[#1C1C1C] text-sm"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ManageClients/AddClientForm.tsx",
                                        lineNumber: 276,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ManageClients/AddClientForm.tsx",
                                lineNumber: 274,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "col-span-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-xs text-[#1C1C1C] mb-2",
                                        children: "Spoke Email Id"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ManageClients/AddClientForm.tsx",
                                        lineNumber: 287,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "email",
                                        name: "spokeEmail",
                                        value: formData.spokeEmail,
                                        onChange: handleChange,
                                        placeholder: "Enter email address",
                                        className: "w-full px-3 py-2 border border-[#E6EAF2] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-[#0B498B]/20 focus:border-none text-[#1C1C1C] text-sm"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ManageClients/AddClientForm.tsx",
                                        lineNumber: 288,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ManageClients/AddClientForm.tsx",
                                lineNumber: 286,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ManageClients/AddClientForm.tsx",
                        lineNumber: 225,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ManageClients/AddClientForm.tsx",
                lineNumber: 223,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-end",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: handleSubmit,
                    className: "bg-[#0B498B] text-white px-4 py-2 rounded-[8px] font-medium text-sm flex items-center justify-center hover:bg-[#0B498B]/90 transition-colors",
                    children: "Save Client"
                }, void 0, false, {
                    fileName: "[project]/components/ManageClients/AddClientForm.tsx",
                    lineNumber: 301,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ManageClients/AddClientForm.tsx",
                lineNumber: 300,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ManageClients/AddClientForm.tsx",
        lineNumber: 89,
        columnNumber: 5
    }, this);
};
_s(AddClientForm, "OhaHfl+Zh+fbgAQvTj5lm8OsD6A=");
_c = AddClientForm;
const __TURBOPACK__default__export__ = AddClientForm;
var _c;
__turbopack_context__.k.register(_c, "AddClientForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/ManageClients/ManageClients.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ManageClients$2f$ClientsTable$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ManageClients/ClientsTable.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ManageClients$2f$AddClientForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ManageClients/AddClientForm.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const ManageClients = ()=>{
    _s();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('list');
    const [clients, setClients] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        {
            id: '1',
            type: 1,
            name: 'ABC Corporate',
            address: '123/b block Dwarka',
            branches: 'Delhi',
            ownerName: 'Dev Kumar',
            ownerPhone: '+91 9898989898',
            ownerEmail: 'devkumar@gmail.com'
        },
        {
            id: '2',
            type: 2,
            name: 'XYX Corporate',
            address: 'xyz/b block Dwarka',
            branches: 'Delhi',
            ownerName: 'Shiv Kumar',
            ownerPhone: '+91 9898989898',
            ownerEmail: 'shivkumar@gmail.com'
        }
    ]);
    const handleAddClient = (newClient)=>{
        // In a real app, you would call an API to save the client
        const clientWithId = {
            ...newClient,
            id: (clients.length + 1).toString()
        };
        setClients([
            ...clients,
            clientWithId
        ]);
        setActiveTab('list');
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "px-[80px]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center pt-[32px] pb-[24px]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-[#1C1C1C] text-[28px] font-bold mt-0",
                    children: "Manage Clients"
                }, void 0, false, {
                    fileName: "[project]/components/ManageClients/ManageClients.tsx",
                    lineNumber: 65,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ManageClients/ManageClients.tsx",
                lineNumber: 64,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-lg shadow",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-b border-[#E6EAF2]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: `px-6 py-4 w-[159px] text-base ${activeTab === 'list' ? 'text-[#0B498B] border-b-4 border-[#0B498B] font-semibold' : 'text-[#696969] font-normal'}`,
                                    onClick: ()=>setActiveTab('list'),
                                    children: "Client Tracker"
                                }, void 0, false, {
                                    fileName: "[project]/components/ManageClients/ManageClients.tsx",
                                    lineNumber: 71,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: `px-6 py-4 w-[159px] text-base ${activeTab === 'add' ? 'text-[#0B498B] border-b-4 border-[#0B498B] font-semibold' : 'text-[#696969]'} font-normal`,
                                    onClick: ()=>setActiveTab('add'),
                                    children: "Add Client"
                                }, void 0, false, {
                                    fileName: "[project]/components/ManageClients/ManageClients.tsx",
                                    lineNumber: 77,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ManageClients/ManageClients.tsx",
                            lineNumber: 70,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/ManageClients/ManageClients.tsx",
                        lineNumber: 69,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `${activeTab === 'list' ? "px-6 py-[21.5px]" : "p-6"}`,
                        children: activeTab === 'list' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ManageClients$2f$ClientsTable$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            clients: clients
                        }, void 0, false, {
                            fileName: "[project]/components/ManageClients/ManageClients.tsx",
                            lineNumber: 88,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ManageClients$2f$AddClientForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            onSubmit: handleAddClient
                        }, void 0, false, {
                            fileName: "[project]/components/ManageClients/ManageClients.tsx",
                            lineNumber: 90,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/ManageClients/ManageClients.tsx",
                        lineNumber: 86,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ManageClients/ManageClients.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ManageClients/ManageClients.tsx",
        lineNumber: 63,
        columnNumber: 5
    }, this);
};
_s(ManageClients, "szRp/AHHxAFNOY+aZjaXk7BJjOU=");
_c = ManageClients;
const __TURBOPACK__default__export__ = ManageClients;
var _c;
__turbopack_context__.k.register(_c, "ManageClients");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "clsx": (()=>clsx),
    "default": (()=>__TURBOPACK__default__export__)
});
function r(e) {
    var t, f, n = "";
    if ("string" == typeof e || "number" == typeof e) n += e;
    else if ("object" == typeof e) if (Array.isArray(e)) {
        var o = e.length;
        for(t = 0; t < o; t++)e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
    } else for(f in e)e[f] && (n && (n += " "), n += f);
    return n;
}
function clsx() {
    for(var e, t, f = 0, n = "", o = arguments.length; f < o; f++)(e = arguments[f]) && (t = r(e)) && (n && (n += " "), n += t);
    return n;
}
const __TURBOPACK__default__export__ = clsx;
}}),
"[project]/node_modules/react-toastify/dist/index.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Bounce": (()=>lt),
    "Flip": (()=>uo),
    "Icons": (()=>W),
    "Slide": (()=>mo),
    "ToastContainer": (()=>Lt),
    "Zoom": (()=>po),
    "collapseToast": (()=>Z),
    "cssTransition": (()=>$),
    "toast": (()=>y)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
"use client";
function Mt(t) {
    if (!t || typeof document == "undefined") return;
    let o = document.head || document.getElementsByTagName("head")[0], e = document.createElement("style");
    e.type = "text/css", o.firstChild ? o.insertBefore(e, o.firstChild) : o.appendChild(e), e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
Mt(`:root{--toastify-color-light: #fff;--toastify-color-dark: #121212;--toastify-color-info: #3498db;--toastify-color-success: #07bc0c;--toastify-color-warning: #f1c40f;--toastify-color-error: hsl(6, 78%, 57%);--toastify-color-transparent: rgba(255, 255, 255, .7);--toastify-icon-color-info: var(--toastify-color-info);--toastify-icon-color-success: var(--toastify-color-success);--toastify-icon-color-warning: var(--toastify-color-warning);--toastify-icon-color-error: var(--toastify-color-error);--toastify-container-width: fit-content;--toastify-toast-width: 320px;--toastify-toast-offset: 16px;--toastify-toast-top: max(var(--toastify-toast-offset), env(safe-area-inset-top));--toastify-toast-right: max(var(--toastify-toast-offset), env(safe-area-inset-right));--toastify-toast-left: max(var(--toastify-toast-offset), env(safe-area-inset-left));--toastify-toast-bottom: max(var(--toastify-toast-offset), env(safe-area-inset-bottom));--toastify-toast-background: #fff;--toastify-toast-padding: 14px;--toastify-toast-min-height: 64px;--toastify-toast-max-height: 800px;--toastify-toast-bd-radius: 6px;--toastify-toast-shadow: 0px 4px 12px rgba(0, 0, 0, .1);--toastify-font-family: sans-serif;--toastify-z-index: 9999;--toastify-text-color-light: #757575;--toastify-text-color-dark: #fff;--toastify-text-color-info: #fff;--toastify-text-color-success: #fff;--toastify-text-color-warning: #fff;--toastify-text-color-error: #fff;--toastify-spinner-color: #616161;--toastify-spinner-color-empty-area: #e0e0e0;--toastify-color-progress-light: linear-gradient(to right, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #ff2d55);--toastify-color-progress-dark: #bb86fc;--toastify-color-progress-info: var(--toastify-color-info);--toastify-color-progress-success: var(--toastify-color-success);--toastify-color-progress-warning: var(--toastify-color-warning);--toastify-color-progress-error: var(--toastify-color-error);--toastify-color-progress-bgo: .2}.Toastify__toast-container{z-index:var(--toastify-z-index);-webkit-transform:translate3d(0,0,var(--toastify-z-index));position:fixed;width:var(--toastify-container-width);box-sizing:border-box;color:#fff;display:flex;flex-direction:column}.Toastify__toast-container--top-left{top:var(--toastify-toast-top);left:var(--toastify-toast-left)}.Toastify__toast-container--top-center{top:var(--toastify-toast-top);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--top-right{top:var(--toastify-toast-top);right:var(--toastify-toast-right);align-items:end}.Toastify__toast-container--bottom-left{bottom:var(--toastify-toast-bottom);left:var(--toastify-toast-left)}.Toastify__toast-container--bottom-center{bottom:var(--toastify-toast-bottom);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--bottom-right{bottom:var(--toastify-toast-bottom);right:var(--toastify-toast-right);align-items:end}.Toastify__toast{--y: 0;position:relative;touch-action:none;width:var(--toastify-toast-width);min-height:var(--toastify-toast-min-height);box-sizing:border-box;margin-bottom:1rem;padding:var(--toastify-toast-padding);border-radius:var(--toastify-toast-bd-radius);box-shadow:var(--toastify-toast-shadow);max-height:var(--toastify-toast-max-height);font-family:var(--toastify-font-family);z-index:0;display:flex;flex:1 auto;align-items:center;word-break:break-word}@media only screen and (max-width: 480px){.Toastify__toast-container{width:100vw;left:env(safe-area-inset-left);margin:0}.Toastify__toast-container--top-left,.Toastify__toast-container--top-center,.Toastify__toast-container--top-right{top:env(safe-area-inset-top);transform:translate(0)}.Toastify__toast-container--bottom-left,.Toastify__toast-container--bottom-center,.Toastify__toast-container--bottom-right{bottom:env(safe-area-inset-bottom);transform:translate(0)}.Toastify__toast-container--rtl{right:env(safe-area-inset-right);left:initial}.Toastify__toast{--toastify-toast-width: 100%;margin-bottom:0;border-radius:0}}.Toastify__toast-container[data-stacked=true]{width:var(--toastify-toast-width)}.Toastify__toast--stacked{position:absolute;width:100%;transform:translate3d(0,var(--y),0) scale(var(--s));transition:transform .3s}.Toastify__toast--stacked[data-collapsed] .Toastify__toast-body,.Toastify__toast--stacked[data-collapsed] .Toastify__close-button{transition:opacity .1s}.Toastify__toast--stacked[data-collapsed=false]{overflow:visible}.Toastify__toast--stacked[data-collapsed=true]:not(:last-child)>*{opacity:0}.Toastify__toast--stacked:after{content:"";position:absolute;left:0;right:0;height:calc(var(--g) * 1px);bottom:100%}.Toastify__toast--stacked[data-pos=top]{top:0}.Toastify__toast--stacked[data-pos=bot]{bottom:0}.Toastify__toast--stacked[data-pos=bot].Toastify__toast--stacked:before{transform-origin:top}.Toastify__toast--stacked[data-pos=top].Toastify__toast--stacked:before{transform-origin:bottom}.Toastify__toast--stacked:before{content:"";position:absolute;left:0;right:0;bottom:0;height:100%;transform:scaleY(3);z-index:-1}.Toastify__toast--rtl{direction:rtl}.Toastify__toast--close-on-click{cursor:pointer}.Toastify__toast-icon{margin-inline-end:10px;width:22px;flex-shrink:0;display:flex}.Toastify--animate{animation-fill-mode:both;animation-duration:.5s}.Toastify--animate-icon{animation-fill-mode:both;animation-duration:.3s}.Toastify__toast-theme--dark{background:var(--toastify-color-dark);color:var(--toastify-text-color-dark)}.Toastify__toast-theme--light,.Toastify__toast-theme--colored.Toastify__toast--default{background:var(--toastify-color-light);color:var(--toastify-text-color-light)}.Toastify__toast-theme--colored.Toastify__toast--info{color:var(--toastify-text-color-info);background:var(--toastify-color-info)}.Toastify__toast-theme--colored.Toastify__toast--success{color:var(--toastify-text-color-success);background:var(--toastify-color-success)}.Toastify__toast-theme--colored.Toastify__toast--warning{color:var(--toastify-text-color-warning);background:var(--toastify-color-warning)}.Toastify__toast-theme--colored.Toastify__toast--error{color:var(--toastify-text-color-error);background:var(--toastify-color-error)}.Toastify__progress-bar-theme--light{background:var(--toastify-color-progress-light)}.Toastify__progress-bar-theme--dark{background:var(--toastify-color-progress-dark)}.Toastify__progress-bar--info{background:var(--toastify-color-progress-info)}.Toastify__progress-bar--success{background:var(--toastify-color-progress-success)}.Toastify__progress-bar--warning{background:var(--toastify-color-progress-warning)}.Toastify__progress-bar--error{background:var(--toastify-color-progress-error)}.Toastify__progress-bar-theme--colored.Toastify__progress-bar--info,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--success,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--warning,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--error{background:var(--toastify-color-transparent)}.Toastify__close-button{color:#fff;position:absolute;top:6px;right:6px;background:transparent;outline:none;border:none;padding:0;cursor:pointer;opacity:.7;transition:.3s ease;z-index:1}.Toastify__toast--rtl .Toastify__close-button{left:6px;right:unset}.Toastify__close-button--light{color:#000;opacity:.3}.Toastify__close-button>svg{fill:currentColor;height:16px;width:14px}.Toastify__close-button:hover,.Toastify__close-button:focus{opacity:1}@keyframes Toastify__trackProgress{0%{transform:scaleX(1)}to{transform:scaleX(0)}}.Toastify__progress-bar{position:absolute;bottom:0;left:0;width:100%;height:100%;z-index:1;opacity:.7;transform-origin:left}.Toastify__progress-bar--animated{animation:Toastify__trackProgress linear 1 forwards}.Toastify__progress-bar--controlled{transition:transform .2s}.Toastify__progress-bar--rtl{right:0;left:initial;transform-origin:right;border-bottom-left-radius:initial}.Toastify__progress-bar--wrp{position:absolute;overflow:hidden;bottom:0;left:0;width:100%;height:5px;border-bottom-left-radius:var(--toastify-toast-bd-radius);border-bottom-right-radius:var(--toastify-toast-bd-radius)}.Toastify__progress-bar--wrp[data-hidden=true]{opacity:0}.Toastify__progress-bar--bg{opacity:var(--toastify-color-progress-bgo);width:100%;height:100%}.Toastify__spinner{width:20px;height:20px;box-sizing:border-box;border:2px solid;border-radius:100%;border-color:var(--toastify-spinner-color-empty-area);border-right-color:var(--toastify-spinner-color);animation:Toastify__spin .65s linear infinite}@keyframes Toastify__bounceInRight{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(3000px,0,0)}60%{opacity:1;transform:translate3d(-25px,0,0)}75%{transform:translate3d(10px,0,0)}90%{transform:translate3d(-5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutRight{20%{opacity:1;transform:translate3d(-20px,var(--y),0)}to{opacity:0;transform:translate3d(2000px,var(--y),0)}}@keyframes Toastify__bounceInLeft{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(-3000px,0,0)}60%{opacity:1;transform:translate3d(25px,0,0)}75%{transform:translate3d(-10px,0,0)}90%{transform:translate3d(5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutLeft{20%{opacity:1;transform:translate3d(20px,var(--y),0)}to{opacity:0;transform:translate3d(-2000px,var(--y),0)}}@keyframes Toastify__bounceInUp{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,3000px,0)}60%{opacity:1;transform:translate3d(0,-20px,0)}75%{transform:translate3d(0,10px,0)}90%{transform:translate3d(0,-5px,0)}to{transform:translateZ(0)}}@keyframes Toastify__bounceOutUp{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,-2000px,0)}}@keyframes Toastify__bounceInDown{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,-3000px,0)}60%{opacity:1;transform:translate3d(0,25px,0)}75%{transform:translate3d(0,-10px,0)}90%{transform:translate3d(0,5px,0)}to{transform:none}}@keyframes Toastify__bounceOutDown{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,2000px,0)}}.Toastify__bounce-enter--top-left,.Toastify__bounce-enter--bottom-left{animation-name:Toastify__bounceInLeft}.Toastify__bounce-enter--top-right,.Toastify__bounce-enter--bottom-right{animation-name:Toastify__bounceInRight}.Toastify__bounce-enter--top-center{animation-name:Toastify__bounceInDown}.Toastify__bounce-enter--bottom-center{animation-name:Toastify__bounceInUp}.Toastify__bounce-exit--top-left,.Toastify__bounce-exit--bottom-left{animation-name:Toastify__bounceOutLeft}.Toastify__bounce-exit--top-right,.Toastify__bounce-exit--bottom-right{animation-name:Toastify__bounceOutRight}.Toastify__bounce-exit--top-center{animation-name:Toastify__bounceOutUp}.Toastify__bounce-exit--bottom-center{animation-name:Toastify__bounceOutDown}@keyframes Toastify__zoomIn{0%{opacity:0;transform:scale3d(.3,.3,.3)}50%{opacity:1}}@keyframes Toastify__zoomOut{0%{opacity:1}50%{opacity:0;transform:translate3d(0,var(--y),0) scale3d(.3,.3,.3)}to{opacity:0}}.Toastify__zoom-enter{animation-name:Toastify__zoomIn}.Toastify__zoom-exit{animation-name:Toastify__zoomOut}@keyframes Toastify__flipIn{0%{transform:perspective(400px) rotateX(90deg);animation-timing-function:ease-in;opacity:0}40%{transform:perspective(400px) rotateX(-20deg);animation-timing-function:ease-in}60%{transform:perspective(400px) rotateX(10deg);opacity:1}80%{transform:perspective(400px) rotateX(-5deg)}to{transform:perspective(400px)}}@keyframes Toastify__flipOut{0%{transform:translate3d(0,var(--y),0) perspective(400px)}30%{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(-20deg);opacity:1}to{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(90deg);opacity:0}}.Toastify__flip-enter{animation-name:Toastify__flipIn}.Toastify__flip-exit{animation-name:Toastify__flipOut}@keyframes Toastify__slideInRight{0%{transform:translate3d(110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInLeft{0%{transform:translate3d(-110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInUp{0%{transform:translate3d(0,110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInDown{0%{transform:translate3d(0,-110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideOutRight{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(110%,var(--y),0)}}@keyframes Toastify__slideOutLeft{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(-110%,var(--y),0)}}@keyframes Toastify__slideOutDown{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,500px,0)}}@keyframes Toastify__slideOutUp{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,-500px,0)}}.Toastify__slide-enter--top-left,.Toastify__slide-enter--bottom-left{animation-name:Toastify__slideInLeft}.Toastify__slide-enter--top-right,.Toastify__slide-enter--bottom-right{animation-name:Toastify__slideInRight}.Toastify__slide-enter--top-center{animation-name:Toastify__slideInDown}.Toastify__slide-enter--bottom-center{animation-name:Toastify__slideInUp}.Toastify__slide-exit--top-left,.Toastify__slide-exit--bottom-left{animation-name:Toastify__slideOutLeft;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-right,.Toastify__slide-exit--bottom-right{animation-name:Toastify__slideOutRight;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-center{animation-name:Toastify__slideOutUp;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--bottom-center{animation-name:Toastify__slideOutDown;animation-timing-function:ease-in;animation-duration:.3s}@keyframes Toastify__spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}
`);
;
var L = (t)=>typeof t == "number" && !isNaN(t), N = (t)=>typeof t == "string", P = (t)=>typeof t == "function", mt = (t)=>N(t) || L(t), B = (t)=>N(t) || P(t) ? t : null, pt = (t, o)=>t === !1 || L(t) && t > 0 ? t : o, z = (t)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"])(t) || N(t) || P(t) || L(t);
;
function Z(t, o, e = 300) {
    let { scrollHeight: r, style: s } = t;
    requestAnimationFrame(()=>{
        s.minHeight = "initial", s.height = r + "px", s.transition = `all ${e}ms`, requestAnimationFrame(()=>{
            s.height = "0", s.padding = "0", s.margin = "0", setTimeout(o, e);
        });
    });
}
function $({ enter: t, exit: o, appendPosition: e = !1, collapse: r = !0, collapseDuration: s = 300 }) {
    return function({ children: a, position: d, preventExitTransition: c, done: T, nodeRef: g, isIn: v, playToast: x }) {
        let C = e ? `${t}--${d}` : t, S = e ? `${o}--${d}` : o, E = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
            let f = g.current, p = C.split(" "), b = (n)=>{
                n.target === g.current && (x(), f.removeEventListener("animationend", b), f.removeEventListener("animationcancel", b), E.current === 0 && n.type !== "animationcancel" && f.classList.remove(...p));
            };
            (()=>{
                f.classList.add(...p), f.addEventListener("animationend", b), f.addEventListener("animationcancel", b);
            })();
        }, []), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
            let f = g.current, p = ()=>{
                f.removeEventListener("animationend", p), r ? Z(f, T, s) : T();
            };
            v || (c ? p() : (()=>{
                E.current = 1, f.className += ` ${S}`, f.addEventListener("animationend", p);
            })());
        }, [
            v
        ]), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, null, a);
    };
}
;
function J(t, o) {
    return {
        content: tt(t.content, t.props),
        containerId: t.props.containerId,
        id: t.props.toastId,
        theme: t.props.theme,
        type: t.props.type,
        data: t.props.data || {},
        isLoading: t.props.isLoading,
        icon: t.props.icon,
        reason: t.removalReason,
        status: o
    };
}
function tt(t, o, e = !1) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"])(t) && !N(t.type) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneElement"])(t, {
        closeToast: o.closeToast,
        toastProps: o,
        data: o.data,
        isPaused: e
    }) : P(t) ? t({
        closeToast: o.closeToast,
        toastProps: o,
        data: o.data,
        isPaused: e
    }) : t;
}
;
function yt({ closeToast: t, theme: o, ariaLabel: e = "close" }) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("button", {
        className: `Toastify__close-button Toastify__close-button--${o}`,
        type: "button",
        onClick: (r)=>{
            r.stopPropagation(), t(!0);
        },
        "aria-label": e
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("svg", {
        "aria-hidden": "true",
        viewBox: "0 0 14 16"
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        fillRule: "evenodd",
        d: "M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"
    })));
}
;
;
function gt({ delay: t, isRunning: o, closeToast: e, type: r = "default", hide: s, className: l, controlledProgress: a, progress: d, rtl: c, isIn: T, theme: g }) {
    let v = s || a && d === 0, x = {
        animationDuration: `${t}ms`,
        animationPlayState: o ? "running" : "paused"
    };
    a && (x.transform = `scaleX(${d})`);
    let C = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Toastify__progress-bar", a ? "Toastify__progress-bar--controlled" : "Toastify__progress-bar--animated", `Toastify__progress-bar-theme--${g}`, `Toastify__progress-bar--${r}`, {
        ["Toastify__progress-bar--rtl"]: c
    }), S = P(l) ? l({
        rtl: c,
        type: r,
        defaultClassName: C
    }) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(C, l), E = {
        [a && d >= 1 ? "onTransitionEnd" : "onAnimationEnd"]: a && d < 1 ? null : ()=>{
            T && e();
        }
    };
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "Toastify__progress-bar--wrp",
        "data-hidden": v
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: `Toastify__progress-bar--bg Toastify__progress-bar-theme--${g} Toastify__progress-bar--${r}`
    }), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        role: "progressbar",
        "aria-hidden": v ? "true" : "false",
        "aria-label": "notification timer",
        className: S,
        style: x,
        ...E
    }));
}
;
;
var Xt = 1, at = ()=>`${Xt++}`;
function _t(t, o, e) {
    let r = 1, s = 0, l = [], a = [], d = o, c = new Map, T = new Set, g = (i)=>(T.add(i), ()=>T.delete(i)), v = ()=>{
        a = Array.from(c.values()), T.forEach((i)=>i());
    }, x = ({ containerId: i, toastId: n, updateId: u })=>{
        let h = i ? i !== t : t !== 1, m = c.has(n) && u == null;
        return h || m;
    }, C = (i, n)=>{
        c.forEach((u)=>{
            var h;
            (n == null || n === u.props.toastId) && ((h = u.toggle) == null || h.call(u, i));
        });
    }, S = (i)=>{
        var n, u;
        (u = (n = i.props) == null ? void 0 : n.onClose) == null || u.call(n, i.removalReason), i.isActive = !1;
    }, E = (i)=>{
        if (i == null) c.forEach(S);
        else {
            let n = c.get(i);
            n && S(n);
        }
        v();
    }, f = ()=>{
        s -= l.length, l = [];
    }, p = (i)=>{
        var m, _;
        let { toastId: n, updateId: u } = i.props, h = u == null;
        i.staleId && c.delete(i.staleId), i.isActive = !0, c.set(n, i), v(), e(J(i, h ? "added" : "updated")), h && ((_ = (m = i.props).onOpen) == null || _.call(m));
    };
    return {
        id: t,
        props: d,
        observe: g,
        toggle: C,
        removeToast: E,
        toasts: c,
        clearQueue: f,
        buildToast: (i, n)=>{
            if (x(n)) return;
            let { toastId: u, updateId: h, data: m, staleId: _, delay: k } = n, M = h == null;
            M && s++;
            let A = {
                ...d,
                style: d.toastStyle,
                key: r++,
                ...Object.fromEntries(Object.entries(n).filter(([D, Y])=>Y != null)),
                toastId: u,
                updateId: h,
                data: m,
                isIn: !1,
                className: B(n.className || d.toastClassName),
                progressClassName: B(n.progressClassName || d.progressClassName),
                autoClose: n.isLoading ? !1 : pt(n.autoClose, d.autoClose),
                closeToast (D) {
                    c.get(u).removalReason = D, E(u);
                },
                deleteToast () {
                    let D = c.get(u);
                    if (D != null) {
                        if (e(J(D, "removed")), c.delete(u), s--, s < 0 && (s = 0), l.length > 0) {
                            p(l.shift());
                            return;
                        }
                        v();
                    }
                }
            };
            A.closeButton = d.closeButton, n.closeButton === !1 || z(n.closeButton) ? A.closeButton = n.closeButton : n.closeButton === !0 && (A.closeButton = z(d.closeButton) ? d.closeButton : !0);
            let R = {
                content: i,
                props: A,
                staleId: _
            };
            d.limit && d.limit > 0 && s > d.limit && M ? l.push(R) : L(k) ? setTimeout(()=>{
                p(R);
            }, k) : p(R);
        },
        setProps (i) {
            d = i;
        },
        setToggle: (i, n)=>{
            let u = c.get(i);
            u && (u.toggle = n);
        },
        isToastActive: (i)=>{
            var n;
            return (n = c.get(i)) == null ? void 0 : n.isActive;
        },
        getSnapshot: ()=>a
    };
}
var I = new Map, F = [], st = new Set, Vt = (t)=>st.forEach((o)=>o(t)), bt = ()=>I.size > 0;
function Qt() {
    F.forEach((t)=>nt(t.content, t.options)), F = [];
}
var vt = (t, { containerId: o })=>{
    var e;
    return (e = I.get(o || 1)) == null ? void 0 : e.toasts.get(t);
};
function X(t, o) {
    var r;
    if (o) return !!((r = I.get(o)) != null && r.isToastActive(t));
    let e = !1;
    return I.forEach((s)=>{
        s.isToastActive(t) && (e = !0);
    }), e;
}
function ht(t) {
    if (!bt()) {
        F = F.filter((o)=>t != null && o.options.toastId !== t);
        return;
    }
    if (t == null || mt(t)) I.forEach((o)=>{
        o.removeToast(t);
    });
    else if (t && ("containerId" in t || "id" in t)) {
        let o = I.get(t.containerId);
        o ? o.removeToast(t.id) : I.forEach((e)=>{
            e.removeToast(t.id);
        });
    }
}
var Ct = (t = {})=>{
    I.forEach((o)=>{
        o.props.limit && (!t.containerId || o.id === t.containerId) && o.clearQueue();
    });
};
function nt(t, o) {
    z(t) && (bt() || F.push({
        content: t,
        options: o
    }), I.forEach((e)=>{
        e.buildToast(t, o);
    }));
}
function xt(t) {
    var o;
    (o = I.get(t.containerId || 1)) == null || o.setToggle(t.id, t.fn);
}
function rt(t, o) {
    I.forEach((e)=>{
        (o == null || !(o != null && o.containerId) || (o == null ? void 0 : o.containerId) === e.id) && e.toggle(t, o == null ? void 0 : o.id);
    });
}
function Et(t) {
    let o = t.containerId || 1;
    return {
        subscribe (e) {
            let r = _t(o, t, Vt);
            I.set(o, r);
            let s = r.observe(e);
            return Qt(), ()=>{
                s(), I.delete(o);
            };
        },
        setProps (e) {
            var r;
            (r = I.get(o)) == null || r.setProps(e);
        },
        getSnapshot () {
            var e;
            return (e = I.get(o)) == null ? void 0 : e.getSnapshot();
        }
    };
}
function Pt(t) {
    return st.add(t), ()=>{
        st.delete(t);
    };
}
function Wt(t) {
    return t && (N(t.toastId) || L(t.toastId)) ? t.toastId : at();
}
function U(t, o) {
    return nt(t, o), o.toastId;
}
function V(t, o) {
    return {
        ...o,
        type: o && o.type || t,
        toastId: Wt(o)
    };
}
function Q(t) {
    return (o, e)=>U(o, V(t, e));
}
function y(t, o) {
    return U(t, V("default", o));
}
y.loading = (t, o)=>U(t, V("default", {
        isLoading: !0,
        autoClose: !1,
        closeOnClick: !1,
        closeButton: !1,
        draggable: !1,
        ...o
    }));
function Gt(t, { pending: o, error: e, success: r }, s) {
    let l;
    o && (l = N(o) ? y.loading(o, s) : y.loading(o.render, {
        ...s,
        ...o
    }));
    let a = {
        isLoading: null,
        autoClose: null,
        closeOnClick: null,
        closeButton: null,
        draggable: null
    }, d = (T, g, v)=>{
        if (g == null) {
            y.dismiss(l);
            return;
        }
        let x = {
            type: T,
            ...a,
            ...s,
            data: v
        }, C = N(g) ? {
            render: g
        } : g;
        return l ? y.update(l, {
            ...x,
            ...C
        }) : y(C.render, {
            ...x,
            ...C
        }), v;
    }, c = P(t) ? t() : t;
    return c.then((T)=>d("success", r, T)).catch((T)=>d("error", e, T)), c;
}
y.promise = Gt;
y.success = Q("success");
y.info = Q("info");
y.error = Q("error");
y.warning = Q("warning");
y.warn = y.warning;
y.dark = (t, o)=>U(t, V("default", {
        theme: "dark",
        ...o
    }));
function qt(t) {
    ht(t);
}
y.dismiss = qt;
y.clearWaitingQueue = Ct;
y.isActive = X;
y.update = (t, o = {})=>{
    let e = vt(t, o);
    if (e) {
        let { props: r, content: s } = e, l = {
            delay: 100,
            ...r,
            ...o,
            toastId: o.toastId || t,
            updateId: at()
        };
        l.toastId !== t && (l.staleId = t);
        let a = l.render || s;
        delete l.render, U(a, l);
    }
};
y.done = (t)=>{
    y.update(t, {
        progress: 1
    });
};
y.onChange = Pt;
y.play = (t)=>rt(!0, t);
y.pause = (t)=>rt(!1, t);
;
function It(t) {
    var a;
    let { subscribe: o, getSnapshot: e, setProps: r } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(Et(t)).current;
    r(t);
    let s = (a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"])(o, e, e)) == null ? void 0 : a.slice();
    function l(d) {
        if (!s) return [];
        let c = new Map;
        return t.newestOnTop && s.reverse(), s.forEach((T)=>{
            let { position: g } = T.props;
            c.has(g) || c.set(g, []), c.get(g).push(T);
        }), Array.from(c, (T)=>d(T[0], T[1]));
    }
    return {
        getToastToRender: l,
        isToastActive: X,
        count: s == null ? void 0 : s.length
    };
}
;
function At(t) {
    let [o, e] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(!1), [r, s] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(!1), l = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null), a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        start: 0,
        delta: 0,
        removalDistance: 0,
        canCloseOnClick: !0,
        canDrag: !1,
        didMove: !1
    }).current, { autoClose: d, pauseOnHover: c, closeToast: T, onClick: g, closeOnClick: v } = t;
    xt({
        id: t.toastId,
        containerId: t.containerId,
        fn: e
    }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (t.pauseOnFocusLoss) return x(), ()=>{
            C();
        };
    }, [
        t.pauseOnFocusLoss
    ]);
    function x() {
        document.hasFocus() || p(), window.addEventListener("focus", f), window.addEventListener("blur", p);
    }
    function C() {
        window.removeEventListener("focus", f), window.removeEventListener("blur", p);
    }
    function S(m) {
        if (t.draggable === !0 || t.draggable === m.pointerType) {
            b();
            let _ = l.current;
            a.canCloseOnClick = !0, a.canDrag = !0, _.style.transition = "none", t.draggableDirection === "x" ? (a.start = m.clientX, a.removalDistance = _.offsetWidth * (t.draggablePercent / 100)) : (a.start = m.clientY, a.removalDistance = _.offsetHeight * (t.draggablePercent === 80 ? t.draggablePercent * 1.5 : t.draggablePercent) / 100);
        }
    }
    function E(m) {
        let { top: _, bottom: k, left: M, right: A } = l.current.getBoundingClientRect();
        m.nativeEvent.type !== "touchend" && t.pauseOnHover && m.clientX >= M && m.clientX <= A && m.clientY >= _ && m.clientY <= k ? p() : f();
    }
    function f() {
        e(!0);
    }
    function p() {
        e(!1);
    }
    function b() {
        a.didMove = !1, document.addEventListener("pointermove", n), document.addEventListener("pointerup", u);
    }
    function i() {
        document.removeEventListener("pointermove", n), document.removeEventListener("pointerup", u);
    }
    function n(m) {
        let _ = l.current;
        if (a.canDrag && _) {
            a.didMove = !0, o && p(), t.draggableDirection === "x" ? a.delta = m.clientX - a.start : a.delta = m.clientY - a.start, a.start !== m.clientX && (a.canCloseOnClick = !1);
            let k = t.draggableDirection === "x" ? `${a.delta}px, var(--y)` : `0, calc(${a.delta}px + var(--y))`;
            _.style.transform = `translate3d(${k},0)`, _.style.opacity = `${1 - Math.abs(a.delta / a.removalDistance)}`;
        }
    }
    function u() {
        i();
        let m = l.current;
        if (a.canDrag && a.didMove && m) {
            if (a.canDrag = !1, Math.abs(a.delta) > a.removalDistance) {
                s(!0), t.closeToast(!0), t.collapseAll();
                return;
            }
            m.style.transition = "transform 0.2s, opacity 0.2s", m.style.removeProperty("transform"), m.style.removeProperty("opacity");
        }
    }
    let h = {
        onPointerDown: S,
        onPointerUp: E
    };
    return d && c && (h.onMouseEnter = p, t.stacked || (h.onMouseLeave = f)), v && (h.onClick = (m)=>{
        g && g(m), a.canCloseOnClick && T(!0);
    }), {
        playToast: f,
        pauseToast: p,
        isRunning: o,
        preventExitTransition: r,
        toastRef: l,
        eventHandlers: h
    };
}
;
var Ot = typeof window != "undefined" ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"];
;
;
;
var G = ({ theme: t, type: o, isLoading: e, ...r })=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("svg", {
        viewBox: "0 0 24 24",
        width: "100%",
        height: "100%",
        fill: t === "colored" ? "currentColor" : `var(--toastify-icon-color-${o})`,
        ...r
    });
function ao(t) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(G, {
        ...t
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        d: "M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"
    }));
}
function so(t) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(G, {
        ...t
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        d: "M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"
    }));
}
function no(t) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(G, {
        ...t
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        d: "M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"
    }));
}
function ro(t) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(G, {
        ...t
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        d: "M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"
    }));
}
function io() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: "Toastify__spinner"
    });
}
var W = {
    info: so,
    warning: ao,
    success: no,
    error: ro,
    spinner: io
}, lo = (t)=>t in W;
function Nt({ theme: t, type: o, isLoading: e, icon: r }) {
    let s = null, l = {
        theme: t,
        type: o
    };
    return r === !1 || (P(r) ? s = r({
        ...l,
        isLoading: e
    }) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"])(r) ? s = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneElement"])(r, l) : e ? s = W.spinner() : lo(o) && (s = W[o](l))), s;
}
var wt = (t)=>{
    let { isRunning: o, preventExitTransition: e, toastRef: r, eventHandlers: s, playToast: l } = At(t), { closeButton: a, children: d, autoClose: c, onClick: T, type: g, hideProgressBar: v, closeToast: x, transition: C, position: S, className: E, style: f, progressClassName: p, updateId: b, role: i, progress: n, rtl: u, toastId: h, deleteToast: m, isIn: _, isLoading: k, closeOnClick: M, theme: A, ariaLabel: R } = t, D = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Toastify__toast", `Toastify__toast-theme--${A}`, `Toastify__toast--${g}`, {
        ["Toastify__toast--rtl"]: u
    }, {
        ["Toastify__toast--close-on-click"]: M
    }), Y = P(E) ? E({
        rtl: u,
        position: S,
        type: g,
        defaultClassName: D
    }) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(D, E), ft = Nt(t), dt = !!n || !c, j = {
        closeToast: x,
        type: g,
        theme: A
    }, H = null;
    return a === !1 || (P(a) ? H = a(j) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"])(a) ? H = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneElement"])(a, j) : H = yt(j)), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(C, {
        isIn: _,
        done: m,
        position: S,
        preventExitTransition: e,
        nodeRef: r,
        playToast: l
    }, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        id: h,
        tabIndex: 0,
        onClick: T,
        "data-in": _,
        className: Y,
        ...s,
        style: f,
        ref: r,
        ..._ && {
            role: i,
            "aria-label": R
        }
    }, ft != null && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Toastify__toast-icon", {
            ["Toastify--animate-icon Toastify__zoom-enter"]: !k
        })
    }, ft), tt(d, t, !o), H, !t.customProgressBar && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(gt, {
        ...b && !dt ? {
            key: `p-${b}`
        } : {},
        rtl: u,
        theme: A,
        delay: c,
        isRunning: o,
        isIn: _,
        closeToast: x,
        hide: v,
        type: g,
        className: p,
        controlledProgress: dt,
        progress: n || 0
    })));
};
var K = (t, o = !1)=>({
        enter: `Toastify--animate Toastify__${t}-enter`,
        exit: `Toastify--animate Toastify__${t}-exit`,
        appendPosition: o
    }), lt = $(K("bounce", !0)), mo = $(K("slide", !0)), po = $(K("zoom")), uo = $(K("flip"));
var _o = {
    position: "top-right",
    transition: lt,
    autoClose: 5e3,
    closeButton: !0,
    pauseOnHover: !0,
    pauseOnFocusLoss: !0,
    draggable: "touch",
    draggablePercent: 80,
    draggableDirection: "x",
    role: "alert",
    theme: "light",
    "aria-label": "Notifications Alt+T",
    hotKeys: (t)=>t.altKey && t.code === "KeyT"
};
function Lt(t) {
    let o = {
        ..._o,
        ...t
    }, e = t.stacked, [r, s] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(!0), l = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null), { getToastToRender: a, isToastActive: d, count: c } = It(o), { className: T, style: g, rtl: v, containerId: x, hotKeys: C } = o;
    function S(f) {
        let p = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Toastify__toast-container", `Toastify__toast-container--${f}`, {
            ["Toastify__toast-container--rtl"]: v
        });
        return P(T) ? T({
            position: f,
            rtl: v,
            defaultClassName: p
        }) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(p, B(T));
    }
    function E() {
        e && (s(!0), y.play());
    }
    return Ot(()=>{
        var f;
        if (e) {
            let p = l.current.querySelectorAll('[data-in="true"]'), b = 12, i = (f = o.position) == null ? void 0 : f.includes("top"), n = 0, u = 0;
            Array.from(p).reverse().forEach((h, m)=>{
                let _ = h;
                _.classList.add("Toastify__toast--stacked"), m > 0 && (_.dataset.collapsed = `${r}`), _.dataset.pos || (_.dataset.pos = i ? "top" : "bot");
                let k = n * (r ? .2 : 1) + (r ? 0 : b * m);
                _.style.setProperty("--y", `${i ? k : k * -1}px`), _.style.setProperty("--g", `${b}`), _.style.setProperty("--s", `${1 - (r ? u : 0)}`), n += _.offsetHeight, u += .025;
            });
        }
    }, [
        r,
        c,
        e
    ]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        function f(p) {
            var i;
            let b = l.current;
            C(p) && ((i = b.querySelector('[tabIndex="0"]')) == null || i.focus(), s(!1), y.pause()), p.key === "Escape" && (document.activeElement === b || b != null && b.contains(document.activeElement)) && (s(!0), y.play());
        }
        return document.addEventListener("keydown", f), ()=>{
            document.removeEventListener("keydown", f);
        };
    }, [
        C
    ]), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("section", {
        ref: l,
        className: "Toastify",
        id: x,
        onMouseEnter: ()=>{
            e && (s(!1), y.pause());
        },
        onMouseLeave: E,
        "aria-live": "polite",
        "aria-atomic": "false",
        "aria-relevant": "additions text",
        "aria-label": o["aria-label"]
    }, a((f, p)=>{
        let b = p.length ? {
            ...g
        } : {
            ...g,
            pointerEvents: "none"
        };
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
            tabIndex: -1,
            className: S(f),
            "data-stacked": e,
            style: b,
            key: `c-${f}`
        }, p.map(({ content: i, props: n })=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(wt, {
                ...n,
                stacked: e,
                collapseAll: E,
                isIn: d(n.toastId, n.containerId),
                key: `t-${n.key}`
            }, i)));
    }));
}
;
 //# sourceMappingURL=index.mjs.map
}}),
}]);

//# sourceMappingURL=_a77ffa82._.js.map