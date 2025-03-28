module.exports = {

"[project]/components/Services/FillServiceForm.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$api$2f$application$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/api/application.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$dropdown$2f$geographical$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/constants/dropdown/geographical.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$formConstants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/constants/formConstants.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$common$2f$Toast$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/common/Toast/index.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$appConstants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/constants/appConstants.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
// Custom DateInput component that supports both manual entry and date picker
const DateInput = ({ name, value, onChange, handleTabChange, label, required = false, placeholder = "DD/MM/YYYY", readOnly = false })=>{
    const [inputValue, setInputValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [showPicker, setShowPicker] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const pickerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const hiddenDateInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Convert ISO format to display format (DD/MM/YYYY)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (value) {
            try {
                // If it's already in ISO format, convert to DD/MM/YYYY for display
                if (value.includes('-')) {
                    const date = new Date(value);
                    if (!isNaN(date.getTime())) {
                        const day = String(date.getDate()).padStart(2, '0');
                        const month = String(date.getMonth() + 1).padStart(2, '0');
                        const year = date.getFullYear();
                        setInputValue(`${day}/${month}/${year}`);
                    }
                } else {
                    // If it's already in DD/MM/YYYY format, use it directly
                    setInputValue(value || '');
                }
            } catch (e) {
                setInputValue(value || '');
            }
        } else {
            setInputValue('');
        }
    }, [
        value
    ]);
    // Focus and initialize the date picker when it appears
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (showPicker && pickerRef.current) {
            // Set default date to today if no value is present
            if (!value && pickerRef.current) {
                const today = new Date();
                const year = today.getFullYear();
                const month = String(today.getMonth() + 1).padStart(2, '0');
                const day = String(today.getDate()).padStart(2, '0');
                pickerRef.current.value = `${year}-${month}-${day}`;
            }
            // Focus the picker
            setTimeout(()=>{
                if (pickerRef.current) {
                    pickerRef.current.focus();
                }
            }, 50);
        }
    }, [
        showPicker,
        value
    ]);
    // Handle clicking outside to close the date picker
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleClickOutside = (event)=>{
            if (containerRef.current && !containerRef.current.contains(event.target)) {
                setShowPicker(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return ()=>{
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    // Handle manual typing in DD/MM/YYYY format
    const handleInputChange = (e)=>{
        const rawValue = e.target.value;
        setInputValue(rawValue);
        // Auto-add slashes while typing (if not deleting)
        if (rawValue.length === 2 && inputValue.length < 2 && !rawValue.includes('/')) {
            setInputValue(rawValue + '/');
        } else if (rawValue.length === 5 && inputValue.length < 5 && rawValue.indexOf('/', 3) === -1) {
            setInputValue(rawValue + '/');
        }
        // Convert DD/MM/YYYY to YYYY-MM-DD for the actual value
        if (rawValue.match(/^\d{2}\/\d{2}\/\d{4}$/)) {
            const [day, month, year] = rawValue.split('/');
            const isoDate = `${year}-${month}-${day}`;
            // Create a synthetic event to pass to the parent onChange handler
            const syntheticEvent = {
                target: {
                    name,
                    value: isoDate
                }
            };
            onChange(syntheticEvent);
        }
    };
    // Handle date selection from the picker
    const handleDatePickerChange = (e)=>{
        const isoDate = e.target.value; // YYYY-MM-DD
        // Create a synthetic event to pass to the parent onChange handler
        const syntheticEvent = {
            target: {
                name,
                value: isoDate
            }
        };
        onChange(syntheticEvent);
        // Convert ISO to DD/MM/YYYY for display
        if (isoDate) {
            const [year, month, day] = isoDate.split('-');
            setInputValue(`${day}/${month}/${year}`);
        }
    };
    // Toggle date picker visibility
    const openCalendar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (readOnly) return;
        if (hiddenDateInputRef.current) {
            // Use the native date picker
            hiddenDateInputRef.current.showPicker?.();
        }
    }, [
        readOnly
    ]);
    // Handle keyboard accessibility
    const handleKeyDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((e)=>{
        if (e.key === 'Escape') {
            setShowPicker(false);
        }
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        onKeyDown: handleKeyDown,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "block text-sm font-medium text-gray-700 mb-2",
                children: [
                    label,
                    required && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-red-500 ml-0.5",
                        children: "*"
                    }, void 0, false, {
                        fileName: "[project]/components/Services/FillServiceForm.tsx",
                        lineNumber: 185,
                        columnNumber: 29
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Services/FillServiceForm.tsx",
                lineNumber: 184,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        ref: inputRef,
                        type: "text",
                        value: inputValue,
                        onChange: handleInputChange,
                        placeholder: placeholder,
                        className: `w-full px-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0B498B] text-[#6A6A6A] pr-10 ${readOnly ? 'bg-gray-100' : 'bg-white'}`,
                        "aria-label": `${label} in format DD/MM/YYYY`,
                        readOnly: readOnly
                    }, void 0, false, {
                        fileName: "[project]/components/Services/FillServiceForm.tsx",
                        lineNumber: 188,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: openCalendar,
                        className: `absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none ${readOnly ? 'opacity-50 cursor-not-allowed' : ''}`,
                        "aria-label": "Open date picker",
                        title: "Open date picker",
                        disabled: readOnly,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            className: "h-5 w-5",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                            }, void 0, false, {
                                fileName: "[project]/components/Services/FillServiceForm.tsx",
                                lineNumber: 207,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/Services/FillServiceForm.tsx",
                            lineNumber: 206,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Services/FillServiceForm.tsx",
                        lineNumber: 198,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        ref: hiddenDateInputRef,
                        type: "date",
                        className: "sr-only",
                        defaultValue: value || '',
                        onChange: handleDatePickerChange,
                        "aria-hidden": "true",
                        disabled: readOnly
                    }, void 0, false, {
                        fileName: "[project]/components/Services/FillServiceForm.tsx",
                        lineNumber: 212,
                        columnNumber: 9
                    }, this),
                    showPicker && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute z-10 mt-1 w-full bg-white rounded-md shadow-lg border border-gray-300",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            ref: pickerRef,
                            type: "date",
                            defaultValue: value || '',
                            onChange: handleDatePickerChange,
                            className: "w-full px-3 py-2 border-0 focus:outline-none focus:ring-1 focus:ring-[#0B498B]",
                            "aria-label": `Date picker for ${label}`,
                            disabled: readOnly
                        }, void 0, false, {
                            fileName: "[project]/components/Services/FillServiceForm.tsx",
                            lineNumber: 224,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Services/FillServiceForm.tsx",
                        lineNumber: 223,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Services/FillServiceForm.tsx",
                lineNumber: 187,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Services/FillServiceForm.tsx",
        lineNumber: 183,
        columnNumber: 5
    }, this);
};
const FillServiceForm = ({ handleTabChange, formMode, setFormMode, visaRequests, setVisaRequests, handleAddMore })=>{
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [applicationId, setApplicationId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Check if we're in a new tab with prefill URL parameter
    const isPrefill = "undefined" !== 'undefined' && new URL(window.location.href).searchParams.get('prefill') === 'true';
    // Try to get application ID from localStorage or URL and also determine the form mode
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        console.log('FillServiceForm - initialization useEffect');
        // Set form mode to EDIT if we're in prefill mode
        if ("TURBOPACK compile-time falsy", 0) {
            "TURBOPACK unreachable";
        }
        // Check localStorage for application ID
        const storedAppId = localStorage.getItem(__TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$formConstants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["STORAGE_KEY"].APPLICATION_ID);
        console.log('Found applicationId in localStorage:', storedAppId);
        if (storedAppId) {
            setApplicationId(parseInt(storedAppId, 10));
            console.log('Set applicationId state to:', parseInt(storedAppId, 10));
        }
        // Get form mode from localStorage or set based on prefill parameter
        const mode = localStorage.getItem(__TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$formConstants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["STORAGE_KEY"].FORM_MODE);
        console.log('Found formMode in localStorage:', mode);
        if (mode === __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$formConstants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FORM_MODE"].VIEW || mode === __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$formConstants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FORM_MODE"].EDIT || mode === __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$formConstants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FORM_MODE"].ADD_SUB_REQUEST) {
            setFormMode(mode);
            console.log('Set formMode state to:', mode);
        } else if ("TURBOPACK compile-time falsy", 0) {
            "TURBOPACK unreachable";
        }
        // If add-sub-request mode, add a new visa request
        if (mode === __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$formConstants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FORM_MODE"].ADD_SUB_REQUEST) {
            console.log('Adding new visa request for add-sub-request mode');
            setVisaRequests((prev)=>[
                    ...prev,
                    {
                        visaCountry: __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$dropdown$2f$geographical$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VISA_COUNTRY_LABELS"][__TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$dropdown$2f$geographical$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COUNTRY"].NETHERLANDS],
                        visaCategory: __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$dropdown$2f$geographical$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VISA_CATEGORY_LABELS"][__TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$dropdown$2f$geographical$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VISA_CATEGORY"].BUSINESS],
                        nationality: __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$dropdown$2f$geographical$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NATIONALITY_LABELS"][__TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$dropdown$2f$geographical$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NATIONALITY"].INDIAN],
                        state: __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$dropdown$2f$geographical$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["STATE_LABELS"][__TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$dropdown$2f$geographical$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["STATE"].DELHI],
                        entryType: __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$dropdown$2f$geographical$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENTRY_TYPE_LABELS"][__TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$dropdown$2f$geographical$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENTRY_TYPE"].NORMAL],
                        remark: ''
                    }
                ]);
        }
        // Load existing application data
        const loadApplicationData = ()=>{
            try {
                // Check for application data in localStorage
                const appDataStr = localStorage.getItem(__TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$formConstants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["STORAGE_KEY"].APPLICATION_INFO);
                if (appDataStr) {
                    const parsedData = JSON.parse(appDataStr);
                    console.log('Application data loaded from localStorage:', parsedData);
                    const url = new URL(window.location.href);
                    const referenceNumber = url.searchParams.get('referenceNumber');
                    localStorage.setItem(__TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$formConstants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["STORAGE_KEY"].SERVICE_REFERENCE_NUMBER, referenceNumber || '');
                    setReferenceNumber(referenceNumber || '');
                    // Populate form fields with saved data for both regular and prefill modes
                    if (parsedData.personal_info) {
                        setPersonalInfo({
                            firstName: parsedData.personal_info.first_name || '',
                            lastName: parsedData.personal_info.last_name || '',
                            emailId: parsedData.personal_info.email_id || '',
                            dateOfBirth: parsedData.personal_info.date_of_birth || '',
                            processingBranch: parsedData.personal_info.processing_branch ? __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$dropdown$2f$geographical$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PROCESSING_BRANCH_LABELS"][parsedData.personal_info.processing_branch] || __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$dropdown$2f$geographical$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PROCESSING_BRANCH_LABELS"][__TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$dropdown$2f$geographical$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PROCESSING_BRANCH"].VISAISTIC_DELHI] : __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$dropdown$2f$geographical$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PROCESSING_BRANCH_LABELS"][__TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$dropdown$2f$geographical$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PROCESSING_BRANCH"].VISAISTIC_DELHI]
                        });
                    }
                    if (parsedData.passport_info) {
                        setPassportInfo({
                            passportNumber: parsedData.passport_info.passport_number || '',
                            dateOfIssue: parsedData.passport_info.date_of_issue || '',
                            dateOfExpiry: parsedData.passport_info.date_of_expiry || '',
                            issueAt: parsedData.passport_info.issue_at || '',
                            noOfExpiredPassport: parsedData.passport_info.no_of_expired_passport?.toString() || '',
                            expiredPassportNumber: parsedData.passport_info.expired_passport_number || ''
                        });
                    }
                    if (parsedData.travel_info) {
                        setTravelInfo({
                            travelDate: parsedData.travel_info.travel_date || '',
                            personalAppearance: parsedData.travel_info.interview_date || '',
                            fileNo: parsedData.travel_info.file_no || ''
                        });
                        // Set submission type and fixed based on the parsed data
                        setSubmissionType(parsedData.travel_info.is_travel_date_tentative === 1 ? 'tentative' : 'fixed');
                        setIsFixed(parsedData.travel_info.priority_submission === 1);
                    }
                    // If we're in prefill mode and in a new tab, we want to use the data
                    // but not overwrite existing visa requests (we'll create a new one)
                    if ("TURBOPACK compile-time falsy", 0) {
                        "TURBOPACK unreachable";
                    } else if ("TURBOPACK compile-time truthy", 1) {
                        console.log('Not prefill mode');
                        // Regular application data loading (not prefill mode)
                        if (parsedData.visa_requests && parsedData.visa_requests.length > 0) {
                            console.log('Not prefill mode in', parsedData.visa_requests.length, 'visa requests');
                            try {
                                // Create a properly mapped array of visa requests with a more explicit approach
                                const parsedVisaRequsts = [];
                                // Log each request as we process it for debugging
                                parsedData.visa_requests.forEach((sourceRequest, index)=>{
                                    console.log(`Processing visa request ${index + 1}:`, sourceRequest);
                                    const mappedRequest = {
                                        visaCountry: sourceRequest.visa_country ? __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$dropdown$2f$geographical$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VISA_COUNTRY_LABELS"][sourceRequest.visa_country] || __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$dropdown$2f$geographical$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VISA_COUNTRY_LABELS"][__TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$dropdown$2f$geographical$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COUNTRY"].NETHERLANDS] || "" : __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$dropdown$2f$geographical$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VISA_COUNTRY_LABELS"][__TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$dropdown$2f$geographical$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COUNTRY"].NETHERLANDS] || "",
                                        visaCategory: sourceRequest.visa_category ? __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$dropdown$2f$geographical$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VISA_CATEGORY_LABELS"][sourceRequest.visa_category] || __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$dropdown$2f$geographical$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VISA_CATEGORY_LABELS"][__TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$dropdown$2f$geographical$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VISA_CATEGORY"].BUSINESS] : __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$dropdown$2f$geographical$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VISA_CATEGORY_LABELS"][__TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$dropdown$2f$geographical$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VISA_CATEGORY"].BUSINESS],
                                        nationality: sourceRequest.nationality ? __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$dropdown$2f$geographical$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NATIONALITY_LABELS"][sourceRequest.nationality] || __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$dropdown$2f$geographical$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NATIONALITY_LABELS"][__TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$dropdown$2f$geographical$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NATIONALITY"].INDIAN] : __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$dropdown$2f$geographical$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NATIONALITY_LABELS"][__TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$dropdown$2f$geographical$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NATIONALITY"].INDIAN],
                                        state: sourceRequest.state ? __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$dropdown$2f$geographical$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["STATE_LABELS"][sourceRequest.state] || __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$dropdown$2f$geographical$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["STATE_LABELS"][__TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$dropdown$2f$geographical$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["STATE"].DELHI] : __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$dropdown$2f$geographical$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["STATE_LABELS"][__TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$dropdown$2f$geographical$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["STATE"].DELHI],
                                        entryType: sourceRequest.entry_type ? __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$dropdown$2f$geographical$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENTRY_TYPE_LABELS"][sourceRequest.entry_type] || __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$dropdown$2f$geographical$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENTRY_TYPE_LABELS"][__TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$dropdown$2f$geographical$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENTRY_TYPE"].NORMAL] : __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$dropdown$2f$geographical$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENTRY_TYPE_LABELS"][__TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$dropdown$2f$geographical$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENTRY_TYPE"].NORMAL],
                                        remark: sourceRequest.remark || ''
                                    };
                                    parsedVisaRequsts.push(mappedRequest);
                                    console.log(`Added visa request ${index + 1}:`, mappedRequest);
                                });
                                console.log('Not prefill mode in 2', parsedVisaRequsts.length, 'visa requests:', parsedVisaRequsts);
                                // If in ADD_SUB_REQUEST mode, add an additional request
                                if (mode === __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$formConstants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FORM_MODE"].ADD_SUB_REQUEST) {
                                    const newRequest = {
                                        visaCountry: __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$dropdown$2f$geographical$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VISA_COUNTRY_LABELS"][__TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$dropdown$2f$geographical$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COUNTRY"].NETHERLANDS] || "",
                                        visaCategory: __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$dropdown$2f$geographical$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VISA_CATEGORY_LABELS"][__TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$dropdown$2f$geographical$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VISA_CATEGORY"].BUSINESS],
                                        nationality: __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$dropdown$2f$geographical$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NATIONALITY_LABELS"][__TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$dropdown$2f$geographical$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NATIONALITY"].INDIAN],
                                        state: __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$dropdown$2f$geographical$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["STATE_LABELS"][__TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$dropdown$2f$geographical$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["STATE"].DELHI],
                                        entryType: __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$dropdown$2f$geographical$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENTRY_TYPE_LABELS"][__TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$dropdown$2f$geographical$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENTRY_TYPE"].NORMAL],
                                        remark: ''
                                    };
                                    parsedVisaRequsts.push(newRequest);
                                    console.log('Added additional request for ADD_SUB_REQUEST mode:', newRequest);
                                }
                                console.log('Not prefill mode in 3', parsedVisaRequsts.length, 'visa requests:', parsedVisaRequsts);
                                // Set this as our initial visa request using a new array reference
                                // This direct state update will override any initial state set by the parent
                                if (parsedVisaRequsts.length > 0) {
                                    console.log('Setting visa requests to:', parsedVisaRequsts);
                                    setVisaRequests([
                                        ...parsedVisaRequsts
                                    ]); // Force a new array reference
                                }
                            } catch (error) {
                                console.error('Error processing visa requests:', error);
                            }
                        }
                    }
                    if (parsedData.address_info) {
                        setAddressInfo({
                            addressLine1: parsedData.address_info.address_line1 || '',
                            addressLine2: parsedData.address_info.address_line2 || '',
                            country: findLabelByValue(parsedData.address_info.country, __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$dropdown$2f$geographical$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COUNTRY_LABELS"]) || '',
                            state: findLabelByValue(parsedData.address_info.state, __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$dropdown$2f$geographical$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["STATE_LABELS"]) || '',
                            city: parsedData.address_info.city?.toString() || '',
                            zip: parsedData.address_info.zip || '',
                            occupation: parsedData.address_info.occupation || '',
                            position: parsedData.address_info.position || ''
                        });
                    }
                    if (parsedData.mi_fields) {
                        setMiFields({
                            oldNumber: parsedData.mi_fields.olvt_number || ''
                        });
                    }
                } else {
                    console.log('No application data found in localStorage');
                }
            } catch (error) {
                console.error('Error loading application data:', error);
            }
        };
        loadApplicationData();
    }, []);
    // Helper function to find label by numeric value
    const findLabelByValue = (value, labelMap)=>{
        const entry = Object.entries(labelMap).find(([key])=>parseInt(key, 10) === value);
        return entry ? entry[1] : '';
    };
    // Split form state into logical groups
    const [personalInfo, setPersonalInfo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        firstName: '',
        lastName: '',
        emailId: '',
        dateOfBirth: '',
        processingBranch: __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$dropdown$2f$geographical$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PROCESSING_BRANCH_LABELS"][__TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$dropdown$2f$geographical$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PROCESSING_BRANCH"].VISAISTIC_DELHI]
    });
    const [passportInfo, setPassportInfo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        passportNumber: '',
        dateOfIssue: '',
        dateOfExpiry: '',
        issueAt: '',
        noOfExpiredPassport: '',
        expiredPassportNumber: ''
    });
    const [travelInfo, setTravelInfo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        travelDate: '2025-02-25',
        personalAppearance: '',
        fileNo: ''
    });
    const [addressInfo, setAddressInfo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        addressLine1: '',
        addressLine2: '',
        country: '',
        state: '',
        city: '',
        zip: '',
        occupation: '',
        position: ''
    });
    const [miFields, setMiFields] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        oldNumber: ''
    });
    const [submissionType, setSubmissionType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('tentative');
    const [isFixed, setIsFixed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [referNumber, setReferenceNumber] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    // Memoized derived values
    const isFormValid = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return personalInfo.firstName && passportInfo.passportNumber && visaRequests.every((request)=>request.visaCountry);
    }, [
        personalInfo.firstName,
        passportInfo.passportNumber,
        visaRequests
    ]);
    // Optimized change handlers with useCallback
    const handlePersonalInfoChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((e)=>{
        const { name, value } = e.target;
        setPersonalInfo((prev)=>({
                ...prev,
                [name]: value
            }));
    }, []);
    const handlePassportInfoChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((e)=>{
        const { name, value } = e.target;
        setPassportInfo((prev)=>({
                ...prev,
                [name]: value
            }));
    }, []);
    const handleTravelInfoChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((e)=>{
        const { name, value } = e.target;
        setTravelInfo((prev)=>({
                ...prev,
                [name]: value
            }));
    }, []);
    const handleVisaInfoChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((e, index)=>{
        const { name, value } = e.target;
        console.log(`handleVisaInfoChange called with field: ${name}, value: ${value}, for index: ${index}`);
        setVisaRequests((prev)=>{
            const newRequests = [
                ...prev
            ];
            // Create a new object reference to ensure React detects the change
            newRequests[index] = {
                ...newRequests[index],
                [name]: value
            };
            return newRequests;
        });
    }, [
        setVisaRequests
    ]);
    const handleAddressInfoChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((e)=>{
        const { name, value } = e.target;
        setAddressInfo((prev)=>({
                ...prev,
                [name]: value
            }));
    }, []);
    const handleMiFieldsChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((e)=>{
        const { name, value } = e.target;
        setMiFields((prev)=>({
                ...prev,
                [name]: value
            }));
    }, []);
    // Define mappings for dropdowns to numeric values required by API
    const countryMap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$dropdown$2f$geographical$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COUNTRY_LABELS"]).reduce((acc, [numValue, label])=>{
            acc[label] = parseInt(numValue, 10);
            return acc;
        }, {}), []);
    const stateMap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$dropdown$2f$geographical$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["STATE_LABELS"]).reduce((acc, [numValue, label])=>{
            acc[label] = parseInt(numValue, 10);
            return acc;
        }, {}), []);
    const processingBranchMap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            [__TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$dropdown$2f$geographical$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PROCESSING_BRANCH_LABELS"][__TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$dropdown$2f$geographical$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PROCESSING_BRANCH"].VISAISTIC_DELHI]]: __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$dropdown$2f$geographical$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PROCESSING_BRANCH"].VISAISTIC_DELHI
        }), []);
    const visaCountryMap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            [__TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$dropdown$2f$geographical$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VISA_COUNTRY_LABELS"][__TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$dropdown$2f$geographical$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COUNTRY"].NETHERLANDS] || ""]: __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$dropdown$2f$geographical$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COUNTRY"].NETHERLANDS
        }), []);
    const visaCategoryMap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            [__TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$dropdown$2f$geographical$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VISA_CATEGORY_LABELS"][__TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$dropdown$2f$geographical$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VISA_CATEGORY"].BUSINESS]]: __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$dropdown$2f$geographical$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VISA_CATEGORY"].BUSINESS
        }), []);
    const nationalityMap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            [__TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$dropdown$2f$geographical$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NATIONALITY_LABELS"][__TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$dropdown$2f$geographical$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NATIONALITY"].INDIAN]]: __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$dropdown$2f$geographical$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NATIONALITY"].INDIAN
        }), []);
    const entryTypeMap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            [__TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$dropdown$2f$geographical$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENTRY_TYPE_LABELS"][__TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$dropdown$2f$geographical$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENTRY_TYPE"].NORMAL]]: __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$dropdown$2f$geographical$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENTRY_TYPE"].NORMAL
        }), []);
    const handleRadioChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((value)=>{
        setSubmissionType(value);
    }, []);
    const handleCheckboxChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((e)=>{
        setIsFixed(e.target.checked);
    }, []);
    // Modified handleSubmit with API integration
    const handleSubmit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (e)=>{
        e.preventDefault();
        // If in view mode, just navigate to the summary page without API call
        if (formMode === __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$formConstants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FORM_MODE"].VIEW) {
            handleTabChange(__TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$formConstants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TAB_NAME"].SUMMARY);
            return;
        }
        // Force applicationId to be a number - default to 0 if null (API will handle this)
        const appId = applicationId || 0;
        setIsSubmitting(true);
        try {
            // Prepare payload according to API requirements
            const payload = {
                personal_info: {
                    first_name: personalInfo.firstName,
                    last_name: personalInfo.lastName,
                    email_id: personalInfo.emailId,
                    date_of_birth: personalInfo.dateOfBirth,
                    processing_branch: processingBranchMap[personalInfo.processingBranch] || 1
                },
                passport_info: {
                    passport_number: passportInfo.passportNumber,
                    date_of_issue: passportInfo.dateOfIssue,
                    date_of_expiry: passportInfo.dateOfExpiry,
                    issue_at: passportInfo.issueAt,
                    no_of_expired_passport: parseInt(passportInfo.noOfExpiredPassport, 10) || 0,
                    expired_passport_number: passportInfo.expiredPassportNumber
                },
                travel_info: {
                    travel_date: travelInfo.travelDate,
                    interview_date: travelInfo.personalAppearance || travelInfo.travelDate,
                    file_no: travelInfo.fileNo,
                    is_travel_date_tentative: submissionType === 'tentative' ? 1 : 0,
                    priority_submission: isFixed ? 1 : 0
                },
                visa_requests: visaRequests.map((request)=>({
                        visa_country: visaCountryMap[request.visaCountry] || 1,
                        visa_category: visaCategoryMap[request.visaCategory] || 1,
                        nationality: nationalityMap[request.nationality] || 1,
                        state: stateMap[request.state] || 6,
                        entry_type: entryTypeMap[request.entryType] || 1,
                        remark: request.remark || '' // Ensure remark is always a string, never undefined
                    })),
                address_info: {
                    address_line1: addressInfo.addressLine1,
                    address_line2: addressInfo.addressLine2,
                    country: countryMap[addressInfo.country] || 1,
                    state: stateMap[addressInfo.state] || 6,
                    city: parseInt(addressInfo.city, 10) || 1,
                    zip: addressInfo.zip,
                    occupation: addressInfo.occupation,
                    position: addressInfo.position
                },
                mi_fields: {
                    olvt_number: miFields.oldNumber
                },
                application_id: appId,
                reference_number: localStorage.getItem(__TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$formConstants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["STORAGE_KEY"].SERVICE_REFERENCE_NUMBER) || '',
                is_sub_request: 0 // Set is_sub_request based on mode
            };
            const url = new URL(window.location.href);
            const newApplicationParam = url.searchParams.get('newApplication');
            const referenceNumber = url.searchParams.get('referenceNumber');
            if (newApplicationParam === 'true') {
                payload.application_id = 0;
                payload.is_sub_request = 1;
                payload.reference_number = referenceNumber || '';
            }
            // Submit to API
            const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$api$2f$application$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addApplicationStep3"])(payload);
            if (response.status) {
                // Success handling - proceed to next step
                console.log('Step 3 data submitted successfully:', response.data);
                url.searchParams.delete('newApplication');
                url.searchParams.delete('referenceNumber');
                // Store the response data in localStorage for use in summary page
                if (response.data && response.data.application_requests) {
                    response.data.application_requests.status = __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$appConstants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["APPLICATION_STATUS"].STEP3_DONE;
                    localStorage.setItem(__TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$formConstants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["STORAGE_KEY"].APPLICATION_INFO, JSON.stringify(response.data.application_requests));
                }
                // Navigate to next step or show success message
                handleTabChange(__TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$formConstants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TAB_NAME"].SUMMARY);
            } else {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$common$2f$Toast$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ToastNotifyError"])(response.message || 'Failed to submit application. Please try again.');
            }
        } catch (error) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$common$2f$Toast$2f$index$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ToastNotifyError"])(error.message || 'An error occurred while submitting the form. Please try again.');
            console.error('Error submitting step 3 data:', error);
        } finally{
            setIsSubmitting(false);
        }
    }, [
        formMode,
        applicationId,
        personalInfo,
        passportInfo,
        travelInfo,
        visaRequests,
        addressInfo,
        miFields,
        submissionType,
        isFixed,
        router,
        countryMap,
        stateMap,
        processingBranchMap,
        visaCountryMap,
        visaCategoryMap,
        nationalityMap,
        entryTypeMap,
        handleTabChange
    ]);
    const handleUpdateApplicant = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        try {
            await handleSubmit({
                preventDefault: ()=>{}
            });
        } catch (error) {
            console.error('Error in handleUpdateApplicant:', error);
        }
    }, [
        handleSubmit
    ]);
    const handleBack = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        router.back();
    }, [
        router
    ]);
    const handleUpdateAndContinue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        try {
            await handleSubmit({
                preventDefault: ()=>{}
            });
        } catch (error) {
            console.error('Error in handleUpdateAndContinue:', error);
        }
    }, [
        handleSubmit
    ]);
    // Function to format date for display
    const formatDateForDisplay = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((isoDate)=>{
        if (!isoDate) return '';
        try {
            const date = new Date(isoDate);
            return date.toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
        } catch (e) {
            return isoDate;
        }
    }, []);
    // Adapter function to convert the form handlers to the DateInput component's handler
    const createDateChangeAdapter = (handler)=>{
        return (e)=>{
            handler(e); // Safe to cast here since our FormChangeEvent has the necessary properties
        };
    };
    // Define processing branch options (with only Visaistic - Delhi)
    const processingBranchOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>[
            {
                value: __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$dropdown$2f$geographical$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PROCESSING_BRANCH_LABELS"][__TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$dropdown$2f$geographical$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PROCESSING_BRANCH"].VISAISTIC_DELHI],
                label: __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$dropdown$2f$geographical$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PROCESSING_BRANCH_LABELS"][__TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$dropdown$2f$geographical$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PROCESSING_BRANCH"].VISAISTIC_DELHI]
            }
        ], []);
    // Define country options from constants
    const countryOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>[
            {
                value: '',
                label: 'Select'
            },
            ...Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$dropdown$2f$geographical$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COUNTRY_LABELS"]).map(([value, label])=>({
                    value: label,
                    label: label
                }))
        ], []);
    // Define Indian state options from constants
    const indianStateOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>[
            {
                value: '',
                label: 'Select'
            },
            ...Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$dropdown$2f$geographical$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["STATE_LABELS"]).map(([value, label])=>({
                    value: label,
                    label: label
                }))
        ], []);
    // First, add the handleRemoveVisaRequest function to the FillServiceForm component
    const handleRemoveVisaRequest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((indexToRemove)=>{
        setVisaRequests((prev)=>prev.filter((_, index)=>index !== indexToRemove));
    }, []);
    // Update the function to ensure it works correctly
    const handleAddNewVisaRequest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        console.log('Handle Add New Visa Request called');
        console.log('Current visaRequests before adding:', visaRequests);
        // Call the parent's handleAddMore function only
        if (typeof handleAddMore === 'function') {
            // We need to call handleAddMore directly without any local state updates
            // to ensure the parent component handles all state updates consistently
            handleAddMore();
            console.log('Parent handleAddMore function called');
            // Add a delayed check to verify the update (for debugging only)
            setTimeout(()=>{
                console.log('Delayed check after handleAddMore - visaRequests:', visaRequests);
            }, 500);
        } else {
            console.error('handleAddMore is not a function');
        }
    }, [
        handleAddMore,
        visaRequests
    ]);
    // Add logging to component render to track visaRequests state on each render
    console.log('FillServiceForm rendering with visaRequests:', visaRequests.length, visaRequests);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-6 mt-[21px] mb-6  bg-white rounded-2xl border border-[#E6EAF2] shadow-sm overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-[#F6F7F9] py-4 px-6 border-b border-gray-200",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[15px] font-medium text-[#0B498B]",
                            children: `Reference No: ${localStorage.getItem(__TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$formConstants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["STORAGE_KEY"].SERVICE_REFERENCE_NUMBER) ? localStorage.getItem(__TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$formConstants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["STORAGE_KEY"].SERVICE_REFERENCE_NUMBER) : referNumber}`
                        }, void 0, false, {
                            fileName: "[project]/components/Services/FillServiceForm.tsx",
                            lineNumber: 874,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Services/FillServiceForm.tsx",
                        lineNumber: 873,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-4 gap-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-gray-700 mb-2",
                                            children: "First Name"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Services/FillServiceForm.tsx",
                                            lineNumber: 880,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            name: "firstName",
                                            value: personalInfo.firstName,
                                            onChange: handlePersonalInfoChange,
                                            placeholder: "Enter first name",
                                            className: `w-full px-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0B498B] text-[#6A6A6A] ${formMode === __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$formConstants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FORM_MODE"].VIEW ? 'bg-gray-100' : 'bg-white'}`,
                                            readOnly: formMode === __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$formConstants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FORM_MODE"].VIEW
                                        }, void 0, false, {
                                            fileName: "[project]/components/Services/FillServiceForm.tsx",
                                            lineNumber: 883,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Services/FillServiceForm.tsx",
                                    lineNumber: 879,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-gray-700 mb-2",
                                            children: "Last Name"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Services/FillServiceForm.tsx",
                                            lineNumber: 895,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            name: "lastName",
                                            value: personalInfo.lastName,
                                            onChange: handlePersonalInfoChange,
                                            placeholder: "Enter Name",
                                            className: `w-full px-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0B498B] text-[#6A6A6A] ${formMode === __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$formConstants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FORM_MODE"].VIEW ? 'bg-gray-100' : 'bg-white'}`,
                                            readOnly: formMode === __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$formConstants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FORM_MODE"].VIEW
                                        }, void 0, false, {
                                            fileName: "[project]/components/Services/FillServiceForm.tsx",
                                            lineNumber: 898,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Services/FillServiceForm.tsx",
                                    lineNumber: 894,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-gray-700 mb-2",
                                            children: "Email Id"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Services/FillServiceForm.tsx",
                                            lineNumber: 910,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "email",
                                            name: "emailId",
                                            value: personalInfo.emailId,
                                            onChange: handlePersonalInfoChange,
                                            placeholder: "Enter Email id",
                                            className: `w-full px-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0B498B] text-[#6A6A6A] ${formMode === __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$formConstants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FORM_MODE"].VIEW ? 'bg-gray-100' : 'bg-white'}`,
                                            readOnly: formMode === __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$formConstants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FORM_MODE"].VIEW
                                        }, void 0, false, {
                                            fileName: "[project]/components/Services/FillServiceForm.tsx",
                                            lineNumber: 913,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Services/FillServiceForm.tsx",
                                    lineNumber: 909,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DateInput, {
                                    name: "dateOfBirth",
                                    value: personalInfo.dateOfBirth,
                                    onChange: createDateChangeAdapter(handlePersonalInfoChange),
                                    label: "Date of Birth",
                                    handleTabChange: handleTabChange,
                                    readOnly: formMode === __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$formConstants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FORM_MODE"].VIEW
                                }, void 0, false, {
                                    fileName: "[project]/components/Services/FillServiceForm.tsx",
                                    lineNumber: 924,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-4 col-span-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-gray-700 mb-2",
                                            children: "Processing Branch"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Services/FillServiceForm.tsx",
                                            lineNumber: 934,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            name: "processingBranch",
                                            value: personalInfo.processingBranch,
                                            onChange: handlePersonalInfoChange,
                                            className: `w-full px-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0B498B] text-[#6A6A6A] appearance-none ${formMode === __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$formConstants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FORM_MODE"].VIEW ? 'bg-gray-100' : 'bg-white'}`,
                                            disabled: formMode === __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$formConstants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FORM_MODE"].VIEW,
                                            children: processingBranchOptions.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: option.value,
                                                    children: option.label
                                                }, `proc-branch-${option.value || 'empty'}`, false, {
                                                    fileName: "[project]/components/Services/FillServiceForm.tsx",
                                                    lineNumber: 945,
                                                    columnNumber: 17
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/components/Services/FillServiceForm.tsx",
                                            lineNumber: 937,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Services/FillServiceForm.tsx",
                                    lineNumber: 933,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Services/FillServiceForm.tsx",
                            lineNumber: 878,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Services/FillServiceForm.tsx",
                        lineNumber: 877,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Services/FillServiceForm.tsx",
                lineNumber: 872,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-6 mt-[21px] mb-6  bg-white rounded-2xl border border-[#E6EAF2] shadow-sm overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-[#F6F7F9] py-4 px-6 border-b border-gray-200",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[15px] font-medium text-[#0B498B]",
                            children: "Passport Details"
                        }, void 0, false, {
                            fileName: "[project]/components/Services/FillServiceForm.tsx",
                            lineNumber: 958,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Services/FillServiceForm.tsx",
                        lineNumber: 957,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-4 gap-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium text-gray-700 mb-2",
                                                children: "Passport Number"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Services/FillServiceForm.tsx",
                                                lineNumber: 964,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                name: "passportNumber",
                                                value: passportInfo.passportNumber,
                                                onChange: handlePassportInfoChange,
                                                placeholder: "Enter passport number",
                                                className: `w-full px-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0B498B] text-[#6A6A6A] ${formMode === __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$formConstants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FORM_MODE"].VIEW ? 'bg-gray-100' : 'bg-white'}`,
                                                readOnly: formMode === __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$formConstants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FORM_MODE"].VIEW
                                            }, void 0, false, {
                                                fileName: "[project]/components/Services/FillServiceForm.tsx",
                                                lineNumber: 967,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Services/FillServiceForm.tsx",
                                        lineNumber: 963,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DateInput, {
                                        name: "dateOfIssue",
                                        value: passportInfo.dateOfIssue,
                                        onChange: createDateChangeAdapter(handlePassportInfoChange),
                                        label: "Date of Issue",
                                        handleTabChange: handleTabChange,
                                        readOnly: formMode === __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$formConstants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FORM_MODE"].VIEW
                                    }, void 0, false, {
                                        fileName: "[project]/components/Services/FillServiceForm.tsx",
                                        lineNumber: 978,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DateInput, {
                                        name: "dateOfExpiry",
                                        value: passportInfo.dateOfExpiry,
                                        onChange: createDateChangeAdapter(handlePassportInfoChange),
                                        label: "Date of Expiry",
                                        handleTabChange: handleTabChange,
                                        readOnly: formMode === __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$formConstants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FORM_MODE"].VIEW
                                    }, void 0, false, {
                                        fileName: "[project]/components/Services/FillServiceForm.tsx",
                                        lineNumber: 987,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium text-gray-700 mb-2",
                                                children: "Issue At"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Services/FillServiceForm.tsx",
                                                lineNumber: 997,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                name: "issueAt",
                                                value: passportInfo.issueAt,
                                                onChange: handlePassportInfoChange,
                                                placeholder: "Enter issue location",
                                                className: `w-full px-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0B498B] text-[#6A6A6A] ${formMode === __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$formConstants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FORM_MODE"].VIEW ? 'bg-gray-100' : 'bg-white'}`,
                                                readOnly: formMode === __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$formConstants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FORM_MODE"].VIEW
                                            }, void 0, false, {
                                                fileName: "[project]/components/Services/FillServiceForm.tsx",
                                                lineNumber: 1000,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Services/FillServiceForm.tsx",
                                        lineNumber: 996,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Services/FillServiceForm.tsx",
                                lineNumber: 962,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-4 gap-6 mt-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium text-gray-700 mb-2",
                                                children: "No of Expired Passport"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Services/FillServiceForm.tsx",
                                                lineNumber: 1014,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                name: "noOfExpiredPassport",
                                                value: passportInfo.noOfExpiredPassport,
                                                onChange: handlePassportInfoChange,
                                                className: `w-full px-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0B498B] text-[#6A6A6A] appearance-none ${formMode === __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$formConstants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FORM_MODE"].VIEW ? 'bg-gray-100' : 'bg-white'}`,
                                                disabled: formMode === __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$formConstants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FORM_MODE"].VIEW,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "",
                                                        children: "Select"
                                                    }, "exp-passport-empty", false, {
                                                        fileName: "[project]/components/Services/FillServiceForm.tsx",
                                                        lineNumber: 1024,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "0",
                                                        children: "0"
                                                    }, "exp-passport-0", false, {
                                                        fileName: "[project]/components/Services/FillServiceForm.tsx",
                                                        lineNumber: 1025,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "1",
                                                        children: "1"
                                                    }, "exp-passport-1", false, {
                                                        fileName: "[project]/components/Services/FillServiceForm.tsx",
                                                        lineNumber: 1026,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "2",
                                                        children: "2"
                                                    }, "exp-passport-2", false, {
                                                        fileName: "[project]/components/Services/FillServiceForm.tsx",
                                                        lineNumber: 1027,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "3",
                                                        children: "3+"
                                                    }, "exp-passport-3", false, {
                                                        fileName: "[project]/components/Services/FillServiceForm.tsx",
                                                        lineNumber: 1028,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Services/FillServiceForm.tsx",
                                                lineNumber: 1017,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Services/FillServiceForm.tsx",
                                        lineNumber: 1013,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium text-gray-700 mb-2",
                                                children: "Expired Passport Number"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Services/FillServiceForm.tsx",
                                                lineNumber: 1033,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                name: "expiredPassportNumber",
                                                value: passportInfo.expiredPassportNumber,
                                                onChange: handlePassportInfoChange,
                                                placeholder: "Enter expired passport number",
                                                className: `w-full px-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0B498B] text-[#6A6A6A] ${formMode === __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$formConstants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FORM_MODE"].VIEW ? 'bg-gray-100' : 'bg-white'}`,
                                                readOnly: formMode === __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$formConstants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FORM_MODE"].VIEW
                                            }, void 0, false, {
                                                fileName: "[project]/components/Services/FillServiceForm.tsx",
                                                lineNumber: 1036,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Services/FillServiceForm.tsx",
                                        lineNumber: 1032,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Services/FillServiceForm.tsx",
                                lineNumber: 1012,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Services/FillServiceForm.tsx",
                        lineNumber: 961,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Services/FillServiceForm.tsx",
                lineNumber: 956,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-6 mt-[21px] mb-6 bg-white rounded-2xl border border-[#E6EAF2] shadow-sm overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-[#F6F7F9] py-4 px-6 border-b border-gray-200",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[15px] font-medium text-[#0B498B]",
                            children: "Travel Details"
                        }, void 0, false, {
                            fileName: "[project]/components/Services/FillServiceForm.tsx",
                            lineNumber: 1053,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Services/FillServiceForm.tsx",
                        lineNumber: 1052,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-4 gap-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DateInput, {
                                        name: "travelDate",
                                        value: travelInfo.travelDate,
                                        onChange: createDateChangeAdapter(handleTravelInfoChange),
                                        label: "Travel Date",
                                        required: true,
                                        handleTabChange: handleTabChange,
                                        readOnly: formMode === __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$formConstants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FORM_MODE"].VIEW
                                    }, void 0, false, {
                                        fileName: "[project]/components/Services/FillServiceForm.tsx",
                                        lineNumber: 1058,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DateInput, {
                                        name: "personalAppearance",
                                        value: travelInfo.personalAppearance,
                                        onChange: createDateChangeAdapter(handleTravelInfoChange),
                                        label: "Personal Appearance/Interview Date",
                                        handleTabChange: handleTabChange,
                                        readOnly: formMode === __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$formConstants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FORM_MODE"].VIEW
                                    }, void 0, false, {
                                        fileName: "[project]/components/Services/FillServiceForm.tsx",
                                        lineNumber: 1068,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "col-span-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium text-gray-700 mb-2",
                                                children: "File No/Company Name"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Services/FillServiceForm.tsx",
                                                lineNumber: 1078,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                name: "fileNo",
                                                value: travelInfo.fileNo,
                                                onChange: handleTravelInfoChange,
                                                placeholder: "Enter name",
                                                className: `w-full px-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0B498B] text-[#6A6A6A] ${formMode === __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$formConstants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FORM_MODE"].VIEW ? 'bg-gray-100' : 'bg-white'}`,
                                                readOnly: formMode === __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$formConstants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FORM_MODE"].VIEW
                                            }, void 0, false, {
                                                fileName: "[project]/components/Services/FillServiceForm.tsx",
                                                lineNumber: 1081,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Services/FillServiceForm.tsx",
                                        lineNumber: 1077,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Services/FillServiceForm.tsx",
                                lineNumber: 1057,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center space-x-8 mt-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `flex items-center space-x-2 ${formMode === __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$formConstants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FORM_MODE"].VIEW ? 'opacity-70' : ''}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "radio",
                                                id: "tentative",
                                                checked: submissionType === 'tentative',
                                                onChange: ()=>handleRadioChange('tentative'),
                                                className: "h-4 w-4 text-[#0B498B] focus:ring-[#0B498B]",
                                                disabled: formMode === __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$formConstants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FORM_MODE"].VIEW
                                            }, void 0, false, {
                                                fileName: "[project]/components/Services/FillServiceForm.tsx",
                                                lineNumber: 1095,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: "tentative",
                                                className: "text-sm font-medium text-gray-700",
                                                children: "Tentative"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Services/FillServiceForm.tsx",
                                                lineNumber: 1103,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Services/FillServiceForm.tsx",
                                        lineNumber: 1094,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `flex items-center space-x-2 ${formMode === __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$formConstants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FORM_MODE"].VIEW ? 'opacity-70' : ''}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "radio",
                                                id: "fixed",
                                                checked: submissionType === 'fixed',
                                                onChange: ()=>handleRadioChange('fixed'),
                                                className: "h-4 w-4 text-[#0B498B] focus:ring-[#0B498B]",
                                                disabled: formMode === __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$formConstants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FORM_MODE"].VIEW
                                            }, void 0, false, {
                                                fileName: "[project]/components/Services/FillServiceForm.tsx",
                                                lineNumber: 1109,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: "fixed",
                                                className: "text-sm font-medium text-gray-700",
                                                children: "Fixed"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Services/FillServiceForm.tsx",
                                                lineNumber: 1117,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Services/FillServiceForm.tsx",
                                        lineNumber: 1108,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "ml-12 text-sm font-medium text-gray-700",
                                        children: "Priority Submission"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Services/FillServiceForm.tsx",
                                        lineNumber: 1122,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `flex items-center space-x-2 ${formMode === __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$formConstants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FORM_MODE"].VIEW ? 'opacity-70' : ''}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "checkbox",
                                                id: "isFixed",
                                                checked: isFixed,
                                                onChange: handleCheckboxChange,
                                                className: "h-4 w-4 text-[#0B498B] focus:ring-[#0B498B] rounded",
                                                disabled: formMode === __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$formConstants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FORM_MODE"].VIEW
                                            }, void 0, false, {
                                                fileName: "[project]/components/Services/FillServiceForm.tsx",
                                                lineNumber: 1127,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: "isFixed",
                                                className: "text-sm font-medium text-gray-700",
                                                children: "Fixed"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Services/FillServiceForm.tsx",
                                                lineNumber: 1135,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Services/FillServiceForm.tsx",
                                        lineNumber: 1126,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Services/FillServiceForm.tsx",
                                lineNumber: 1093,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Services/FillServiceForm.tsx",
                        lineNumber: 1056,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Services/FillServiceForm.tsx",
                lineNumber: 1051,
                columnNumber: 7
            }, this),
            visaRequests.map((request, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-6 mt-[21px] mb-6 bg-white rounded-2xl border border-[#E6EAF2] shadow-sm overflow-hidden relative",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-[#F6F7F9] py-4 px-6 border-b border-gray-200 flex justify-between items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[15px] font-medium text-[#0B498B]",
                                    children: [
                                        "Visa Request ",
                                        visaRequests.length > 1 ? index + 1 : ''
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Services/FillServiceForm.tsx",
                                    lineNumber: 1147,
                                    columnNumber: 13
                                }, this),
                                visaRequests.length > 1 && formMode !== __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$formConstants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FORM_MODE"].VIEW && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>handleRemoveVisaRequest(index),
                                    className: "text-gray-500 hover:text-red-500 transition-colors focus:outline-none",
                                    "aria-label": `Remove visa request ${index + 1}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        className: "h-5 w-5",
                                        viewBox: "0 0 20 20",
                                        fill: "currentColor",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            fillRule: "evenodd",
                                            d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
                                            clipRule: "evenodd"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Services/FillServiceForm.tsx",
                                            lineNumber: 1156,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/Services/FillServiceForm.tsx",
                                        lineNumber: 1155,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/Services/FillServiceForm.tsx",
                                    lineNumber: 1149,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Services/FillServiceForm.tsx",
                            lineNumber: 1146,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-4 gap-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-medium text-gray-700 mb-2",
                                                    children: [
                                                        "Visa Country",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-red-500",
                                                            children: "*"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Services/FillServiceForm.tsx",
                                                            lineNumber: 1166,
                                                            columnNumber: 31
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/Services/FillServiceForm.tsx",
                                                    lineNumber: 1165,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    name: "visaCountry",
                                                    value: request.visaCountry,
                                                    onChange: (e)=>handleVisaInfoChange(e, index),
                                                    className: `w-full px-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0B498B] text-[#6A6A6A] appearance-none ${formMode === __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$formConstants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FORM_MODE"].VIEW ? 'bg-gray-100' : 'bg-white'}`,
                                                    disabled: formMode === __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$formConstants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FORM_MODE"].VIEW,
                                                    children: Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$dropdown$2f$geographical$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VISA_COUNTRY_LABELS"]).map(([value, label])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: value,
                                                            children: label
                                                        }, `visa-country-${index}-${value}`, false, {
                                                            fileName: "[project]/components/Services/FillServiceForm.tsx",
                                                            lineNumber: 1176,
                                                            columnNumber: 21
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Services/FillServiceForm.tsx",
                                                    lineNumber: 1168,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Services/FillServiceForm.tsx",
                                            lineNumber: 1164,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-medium text-gray-700 mb-2",
                                                    children: [
                                                        "Visa Category",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-red-500",
                                                            children: "*"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Services/FillServiceForm.tsx",
                                                            lineNumber: 1185,
                                                            columnNumber: 32
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/Services/FillServiceForm.tsx",
                                                    lineNumber: 1184,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    name: "visaCategory",
                                                    value: request.visaCategory,
                                                    onChange: (e)=>handleVisaInfoChange(e, index),
                                                    className: `w-full px-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0B498B] text-[#6A6A6A] appearance-none ${formMode === __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$formConstants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FORM_MODE"].VIEW ? 'bg-gray-100' : 'bg-white'}`,
                                                    disabled: formMode === __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$formConstants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FORM_MODE"].VIEW,
                                                    children: Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$dropdown$2f$geographical$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VISA_CATEGORY_LABELS"]).map(([value, label])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: value,
                                                            children: label
                                                        }, `visa-category-${index}-${value}`, false, {
                                                            fileName: "[project]/components/Services/FillServiceForm.tsx",
                                                            lineNumber: 1195,
                                                            columnNumber: 21
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Services/FillServiceForm.tsx",
                                                    lineNumber: 1187,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Services/FillServiceForm.tsx",
                                            lineNumber: 1183,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-medium text-gray-700 mb-2",
                                                    children: [
                                                        "Nationality",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-red-500",
                                                            children: "*"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Services/FillServiceForm.tsx",
                                                            lineNumber: 1204,
                                                            columnNumber: 30
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/Services/FillServiceForm.tsx",
                                                    lineNumber: 1203,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    name: "nationality",
                                                    value: request.nationality,
                                                    onChange: (e)=>handleVisaInfoChange(e, index),
                                                    className: `w-full px-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0B498B] text-[#6A6A6A] appearance-none ${formMode === __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$formConstants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FORM_MODE"].VIEW ? 'bg-gray-100' : 'bg-white'}`,
                                                    disabled: formMode === __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$formConstants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FORM_MODE"].VIEW,
                                                    children: Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$dropdown$2f$geographical$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NATIONALITY_LABELS"]).map(([value, label])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: value,
                                                            children: label
                                                        }, `nationality-${index}-${value}`, false, {
                                                            fileName: "[project]/components/Services/FillServiceForm.tsx",
                                                            lineNumber: 1214,
                                                            columnNumber: 21
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Services/FillServiceForm.tsx",
                                                    lineNumber: 1206,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Services/FillServiceForm.tsx",
                                            lineNumber: 1202,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-medium text-gray-700 mb-2",
                                                    children: [
                                                        "State",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-red-500",
                                                            children: "*"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Services/FillServiceForm.tsx",
                                                            lineNumber: 1223,
                                                            columnNumber: 24
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/Services/FillServiceForm.tsx",
                                                    lineNumber: 1222,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    name: "state",
                                                    value: request.state,
                                                    onChange: (e)=>handleVisaInfoChange(e, index),
                                                    className: `w-full px-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0B498B] text-[#6A6A6A] appearance-none ${formMode === __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$formConstants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FORM_MODE"].VIEW ? 'bg-gray-100' : 'bg-white'}`,
                                                    disabled: formMode === __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$formConstants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FORM_MODE"].VIEW,
                                                    children: Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$dropdown$2f$geographical$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["STATE_LABELS"]).map(([value, label])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: value,
                                                            children: label
                                                        }, `visa-state-${index}-${value}`, false, {
                                                            fileName: "[project]/components/Services/FillServiceForm.tsx",
                                                            lineNumber: 1233,
                                                            columnNumber: 21
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Services/FillServiceForm.tsx",
                                                    lineNumber: 1225,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Services/FillServiceForm.tsx",
                                            lineNumber: 1221,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Services/FillServiceForm.tsx",
                                    lineNumber: 1163,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-4 gap-6 mt-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-medium text-gray-700 mb-2",
                                                    children: [
                                                        "Entry Type",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-red-500",
                                                            children: "*"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Services/FillServiceForm.tsx",
                                                            lineNumber: 1244,
                                                            columnNumber: 29
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/Services/FillServiceForm.tsx",
                                                    lineNumber: 1243,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    name: "entryType",
                                                    value: request.entryType,
                                                    onChange: (e)=>handleVisaInfoChange(e, index),
                                                    className: `w-full px-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0B498B] text-[#6A6A6A] appearance-none ${formMode === __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$formConstants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FORM_MODE"].VIEW ? 'bg-gray-100' : 'bg-white'}`,
                                                    disabled: formMode === __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$formConstants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FORM_MODE"].VIEW,
                                                    children: Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$dropdown$2f$geographical$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENTRY_TYPE_LABELS"]).map(([value, label])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: value,
                                                            children: label
                                                        }, `entry-type-${index}-${value}`, false, {
                                                            fileName: "[project]/components/Services/FillServiceForm.tsx",
                                                            lineNumber: 1254,
                                                            columnNumber: 21
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Services/FillServiceForm.tsx",
                                                    lineNumber: 1246,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Services/FillServiceForm.tsx",
                                            lineNumber: 1242,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-medium text-gray-700 mb-2",
                                                    children: "Remark"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Services/FillServiceForm.tsx",
                                                    lineNumber: 1262,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    name: "remark",
                                                    value: request.remark || '',
                                                    onChange: (e)=>handleVisaInfoChange(e, index),
                                                    placeholder: "Enter remarks here",
                                                    className: `w-full px-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0B498B] text-[#6A6A6A] ${formMode === __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$formConstants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FORM_MODE"].VIEW ? 'bg-gray-100' : 'bg-white'}`,
                                                    readOnly: formMode === __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$formConstants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FORM_MODE"].VIEW
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Services/FillServiceForm.tsx",
                                                    lineNumber: 1265,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Services/FillServiceForm.tsx",
                                            lineNumber: 1261,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "col-span-2 flex items-end justify-end",
                                            children: index === visaRequests.length - 1 && formMode !== __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$formConstants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FORM_MODE"].VIEW && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: handleAddNewVisaRequest,
                                                className: "bg-[#0B498B] text-white px-6 py-2.5 rounded-md hover:bg-[#083968] transition-colors focus:outline-none focus:ring-1 focus:ring-[#0B498B] font-medium",
                                                children: "Add More"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Services/FillServiceForm.tsx",
                                                lineNumber: 1278,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/Services/FillServiceForm.tsx",
                                            lineNumber: 1276,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Services/FillServiceForm.tsx",
                                    lineNumber: 1241,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Services/FillServiceForm.tsx",
                            lineNumber: 1162,
                            columnNumber: 11
                        }, this)
                    ]
                }, `visa-request-${index}`, true, {
                    fileName: "[project]/components/Services/FillServiceForm.tsx",
                    lineNumber: 1145,
                    columnNumber: 9
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-6 mt-[21px] mb-6 bg-white rounded-2xl border border-[#E6EAF2] shadow-sm overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-[#F6F7F9] py-4 px-6 border-b border-gray-200",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[15px] font-medium text-[#0B498B]",
                            children: "Address Details"
                        }, void 0, false, {
                            fileName: "[project]/components/Services/FillServiceForm.tsx",
                            lineNumber: 1295,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Services/FillServiceForm.tsx",
                        lineNumber: 1294,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-4 gap-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium text-gray-700 mb-2",
                                                children: "Address Line 1"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Services/FillServiceForm.tsx",
                                                lineNumber: 1301,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                name: "addressLine1",
                                                value: addressInfo.addressLine1,
                                                onChange: handleAddressInfoChange,
                                                placeholder: "Enter first name",
                                                className: `w-full px-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0B498B] text-[#6A6A6A] ${formMode === __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$formConstants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FORM_MODE"].VIEW ? 'bg-gray-100' : 'bg-white'}`,
                                                readOnly: formMode === __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$formConstants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FORM_MODE"].VIEW
                                            }, void 0, false, {
                                                fileName: "[project]/components/Services/FillServiceForm.tsx",
                                                lineNumber: 1304,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Services/FillServiceForm.tsx",
                                        lineNumber: 1300,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium text-gray-700 mb-2",
                                                children: "Address Line 2"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Services/FillServiceForm.tsx",
                                                lineNumber: 1316,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                name: "addressLine2",
                                                value: addressInfo.addressLine2,
                                                onChange: handleAddressInfoChange,
                                                placeholder: "Enter Name",
                                                className: `w-full px-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0B498B] text-[#6A6A6A] ${formMode === __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$formConstants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FORM_MODE"].VIEW ? 'bg-gray-100' : 'bg-white'}`,
                                                readOnly: formMode === __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$formConstants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FORM_MODE"].VIEW
                                            }, void 0, false, {
                                                fileName: "[project]/components/Services/FillServiceForm.tsx",
                                                lineNumber: 1319,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Services/FillServiceForm.tsx",
                                        lineNumber: 1315,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium text-gray-700 mb-2",
                                                children: "Country"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Services/FillServiceForm.tsx",
                                                lineNumber: 1331,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                name: "country",
                                                value: addressInfo.country,
                                                onChange: handleAddressInfoChange,
                                                className: `w-full px-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0B498B] text-[#6A6A6A] appearance-none ${formMode === __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$formConstants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FORM_MODE"].VIEW ? 'bg-gray-100' : 'bg-white'}`,
                                                disabled: formMode === __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$formConstants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FORM_MODE"].VIEW,
                                                children: countryOptions.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: option.value,
                                                        children: option.label
                                                    }, `addr-country-${option.value || 'empty'}`, false, {
                                                        fileName: "[project]/components/Services/FillServiceForm.tsx",
                                                        lineNumber: 1342,
                                                        columnNumber: 19
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/components/Services/FillServiceForm.tsx",
                                                lineNumber: 1334,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Services/FillServiceForm.tsx",
                                        lineNumber: 1330,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium text-gray-700 mb-2",
                                                children: "State"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Services/FillServiceForm.tsx",
                                                lineNumber: 1350,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                name: "state",
                                                value: addressInfo.state,
                                                onChange: handleAddressInfoChange,
                                                className: `w-full px-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0B498B] text-[#6A6A6A] appearance-none ${formMode === __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$formConstants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FORM_MODE"].VIEW ? 'bg-gray-100' : 'bg-white'}`,
                                                disabled: formMode === __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$formConstants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FORM_MODE"].VIEW,
                                                children: indianStateOptions.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: option.value,
                                                        children: option.label
                                                    }, `addr-state-${option.value || 'empty'}`, false, {
                                                        fileName: "[project]/components/Services/FillServiceForm.tsx",
                                                        lineNumber: 1361,
                                                        columnNumber: 19
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/components/Services/FillServiceForm.tsx",
                                                lineNumber: 1353,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Services/FillServiceForm.tsx",
                                        lineNumber: 1349,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Services/FillServiceForm.tsx",
                                lineNumber: 1299,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-4 gap-6 mt-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium text-gray-700 mb-2",
                                                children: "City"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Services/FillServiceForm.tsx",
                                                lineNumber: 1371,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                name: "city",
                                                value: addressInfo.city,
                                                onChange: handleAddressInfoChange,
                                                className: `w-full px-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0B498B] text-[#6A6A6A] appearance-none ${formMode === __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$formConstants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FORM_MODE"].VIEW ? 'bg-gray-100' : 'bg-white'}`,
                                                disabled: formMode === __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$formConstants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FORM_MODE"].VIEW,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "",
                                                    children: "Select"
                                                }, "addr-city-empty", false, {
                                                    fileName: "[project]/components/Services/FillServiceForm.tsx",
                                                    lineNumber: 1381,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/Services/FillServiceForm.tsx",
                                                lineNumber: 1374,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Services/FillServiceForm.tsx",
                                        lineNumber: 1370,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium text-gray-700 mb-2",
                                                children: "Zip"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Services/FillServiceForm.tsx",
                                                lineNumber: 1386,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                name: "zip",
                                                value: addressInfo.zip,
                                                onChange: handleAddressInfoChange,
                                                placeholder: "Enter Zip",
                                                className: `w-full px-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0B498B] text-[#6A6A6A] ${formMode === __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$formConstants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FORM_MODE"].VIEW ? 'bg-gray-100' : 'bg-white'}`,
                                                readOnly: formMode === __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$formConstants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FORM_MODE"].VIEW
                                            }, void 0, false, {
                                                fileName: "[project]/components/Services/FillServiceForm.tsx",
                                                lineNumber: 1389,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Services/FillServiceForm.tsx",
                                        lineNumber: 1385,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium text-gray-700 mb-2",
                                                children: "Occupation"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Services/FillServiceForm.tsx",
                                                lineNumber: 1401,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                name: "occupation",
                                                value: addressInfo.occupation,
                                                onChange: handleAddressInfoChange,
                                                placeholder: "Enter Occupation",
                                                className: `w-full px-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0B498B] text-[#6A6A6A] ${formMode === __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$formConstants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FORM_MODE"].VIEW ? 'bg-gray-100' : 'bg-white'}`,
                                                readOnly: formMode === __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$formConstants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FORM_MODE"].VIEW
                                            }, void 0, false, {
                                                fileName: "[project]/components/Services/FillServiceForm.tsx",
                                                lineNumber: 1404,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Services/FillServiceForm.tsx",
                                        lineNumber: 1400,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium text-gray-700 mb-2",
                                                children: "Position"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Services/FillServiceForm.tsx",
                                                lineNumber: 1416,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                name: "position",
                                                value: addressInfo.position,
                                                onChange: handleAddressInfoChange,
                                                placeholder: "Enter Position",
                                                className: `w-full px-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0B498B] text-[#6A6A6A] ${formMode === __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$formConstants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FORM_MODE"].VIEW ? 'bg-gray-100' : 'bg-white'}`,
                                                readOnly: formMode === __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$formConstants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FORM_MODE"].VIEW
                                            }, void 0, false, {
                                                fileName: "[project]/components/Services/FillServiceForm.tsx",
                                                lineNumber: 1419,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Services/FillServiceForm.tsx",
                                        lineNumber: 1415,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Services/FillServiceForm.tsx",
                                lineNumber: 1369,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-end mt-4",
                                children: formMode !== __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$formConstants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FORM_MODE"].VIEW && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: handleUpdateApplicant,
                                    className: "bg-[#0B498B] text-white px-4 py-2 rounded-md hover:bg-[#083968] transition-colors focus:outline-none focus:ring-2 focus:ring-[#0B498B] focus:ring-opacity-50 font-medium",
                                    children: "Update Applicant"
                                }, void 0, false, {
                                    fileName: "[project]/components/Services/FillServiceForm.tsx",
                                    lineNumber: 1434,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/Services/FillServiceForm.tsx",
                                lineNumber: 1432,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Services/FillServiceForm.tsx",
                        lineNumber: 1298,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Services/FillServiceForm.tsx",
                lineNumber: 1293,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-6 mt-[21px] mb-6 bg-white rounded-2xl border border-[#E6EAF2] shadow-sm overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-[#F6F7F9] py-4 px-6 border-b border-gray-200",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[15px] font-medium text-[#0B498B]",
                            children: "MI Fields"
                        }, void 0, false, {
                            fileName: "[project]/components/Services/FillServiceForm.tsx",
                            lineNumber: 1449,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Services/FillServiceForm.tsx",
                        lineNumber: 1448,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-medium text-gray-700 mb-2",
                                    children: "Olvt Number"
                                }, void 0, false, {
                                    fileName: "[project]/components/Services/FillServiceForm.tsx",
                                    lineNumber: 1454,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    name: "oldNumber",
                                    value: miFields.oldNumber,
                                    onChange: handleMiFieldsChange,
                                    placeholder: "Enter Olvt number",
                                    className: `w-full max-w-md px-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0B498B] text-[#6A6A6A] ${formMode === __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$formConstants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FORM_MODE"].VIEW ? 'bg-gray-100' : 'bg-white'}`,
                                    readOnly: formMode === __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$formConstants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FORM_MODE"].VIEW
                                }, void 0, false, {
                                    fileName: "[project]/components/Services/FillServiceForm.tsx",
                                    lineNumber: 1457,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Services/FillServiceForm.tsx",
                            lineNumber: 1453,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Services/FillServiceForm.tsx",
                        lineNumber: 1452,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Services/FillServiceForm.tsx",
                lineNumber: 1447,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-end items-center mx-6 pb-8 pt-4 space-x-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: handleBack,
                        className: "px-8 py-2.5 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-1 focus:ring-[#0B498B] font-medium",
                        disabled: isSubmitting,
                        children: "Back"
                    }, void 0, false, {
                        fileName: "[project]/components/Services/FillServiceForm.tsx",
                        lineNumber: 1472,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: handleUpdateAndContinue,
                        className: "bg-[#0B498B] text-white px-8 py-2.5 rounded-md hover:bg-[#083968] transition-colors focus:outline-none focus:ring-1 focus:ring-[#0B498B] font-medium",
                        disabled: formMode !== __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$formConstants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FORM_MODE"].VIEW && !isFormValid || isSubmitting,
                        children: isSubmitting ? 'Submitting...' : formMode === __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$formConstants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FORM_MODE"].VIEW ? 'Next' : 'Update & Continue'
                    }, void 0, false, {
                        fileName: "[project]/components/Services/FillServiceForm.tsx",
                        lineNumber: 1481,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Services/FillServiceForm.tsx",
                lineNumber: 1471,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Services/FillServiceForm.tsx",
        lineNumber: 869,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].memo(FillServiceForm);
}}),

};

//# sourceMappingURL=components_Services_FillServiceForm_tsx_0b3d4eb0._.js.map