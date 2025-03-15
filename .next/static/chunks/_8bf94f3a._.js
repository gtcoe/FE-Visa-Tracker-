(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/_8bf94f3a._.js", {

"[project]/components/common/CustomDropdown.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
/**
 * A fully customizable dropdown component that matches the Figma design
 * @param {Object} props - Component properties
 * @returns {React.ReactElement} Rendered dropdown component
 */ const CustomDropdown = ({ options, value, onChange, placeholder = "Select", className = "", disabled = false })=>{
    _s();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const dropdownRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Find the selected option label
    const selectedOption = options.find((option)=>option.value === value);
    // Handle click outside to close dropdown
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CustomDropdown.useEffect": ()=>{
            const handleClickOutside = {
                "CustomDropdown.useEffect.handleClickOutside": (event)=>{
                    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                        setIsOpen(false);
                    }
                }
            }["CustomDropdown.useEffect.handleClickOutside"];
            document.addEventListener("mousedown", handleClickOutside);
            return ({
                "CustomDropdown.useEffect": ()=>{
                    document.removeEventListener("mousedown", handleClickOutside);
                }
            })["CustomDropdown.useEffect"];
        }
    }["CustomDropdown.useEffect"], []);
    // Toggle dropdown
    const toggleDropdown = ()=>{
        if (!disabled) {
            setIsOpen(!isOpen);
        }
    };
    // Handle option selection
    const handleOptionClick = (optionValue)=>{
        onChange(optionValue);
        setIsOpen(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: dropdownRef,
        className: `relative w-full ${className}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                onClick: toggleDropdown,
                className: `flex items-center justify-between w-full h-10 px-3 text-left text-sm 
          border border-[#E6EAF2] rounded 
          ${disabled ? "bg-gray-100 cursor-not-allowed" : "bg-white cursor-pointer hover:border-[#0B498B]/30"}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: value ? "text-[#1C1C1C]" : "text-[#A0A0A0]",
                        children: selectedOption ? selectedOption.label : placeholder
                    }, void 0, false, {
                        fileName: "[project]/components/common/CustomDropdown.tsx",
                        lineNumber: 77,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: "16",
                        height: "16",
                        viewBox: "0 0 16 16",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        className: `transition-transform duration-200 ${isOpen ? "transform rotate-180" : ""}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M4 6L8 10L12 6",
                            stroke: "#A0A0A0",
                            strokeWidth: "1.5",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        }, void 0, false, {
                            fileName: "[project]/components/common/CustomDropdown.tsx",
                            lineNumber: 88,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/common/CustomDropdown.tsx",
                        lineNumber: 80,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/common/CustomDropdown.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, this),
            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute z-10 w-full mt-1 bg-white border border-[#E6EAF2] rounded shadow-sm py-1 max-h-60 overflow-auto",
                children: options.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        onClick: ()=>handleOptionClick(option.value),
                        className: `px-3 py-2 text-sm cursor-pointer hover:bg-[#F5F7FA] transition-colors
                ${option.value === value ? "text-[#0B498B] font-medium" : "text-[#1C1C1C]"}`,
                        children: option.label
                    }, option.value, false, {
                        fileName: "[project]/components/common/CustomDropdown.tsx",
                        lineNumber: 101,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/common/CustomDropdown.tsx",
                lineNumber: 99,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/common/CustomDropdown.tsx",
        lineNumber: 67,
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
"[project]/components/ApplicationTracker/StatusForm.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// components/StatusForm.tsx
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$common$2f$CustomDropdown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/common/CustomDropdown.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
;
;
// Custom DateInput component that supports both manual entry and date picker
const DateInput = ({ name, value, onChange, label, required = false, placeholder = "DD/MM/YYYY" })=>{
    _s();
    const [inputValue, setInputValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [showPicker, setShowPicker] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const pickerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const hiddenDateInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Convert ISO format to display format (DD/MM/YYYY)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DateInput.useEffect": ()=>{
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
                        setInputValue(value);
                    }
                } catch (e) {
                    setInputValue(value || '');
                }
            } else {
                setInputValue('');
            }
        }
    }["DateInput.useEffect"], [
        value
    ]);
    // Focus and initialize the date picker when it appears
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DateInput.useEffect": ()=>{
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
                setTimeout({
                    "DateInput.useEffect": ()=>{
                        if (pickerRef.current) {
                            pickerRef.current.focus();
                        }
                    }
                }["DateInput.useEffect"], 50);
            }
        }
    }["DateInput.useEffect"], [
        showPicker,
        value
    ]);
    // Handle clicking outside to close the date picker
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DateInput.useEffect": ()=>{
            const handleClickOutside = {
                "DateInput.useEffect.handleClickOutside": (event)=>{
                    if (containerRef.current && !containerRef.current.contains(event.target)) {
                        setShowPicker(false);
                    }
                }
            }["DateInput.useEffect.handleClickOutside"];
            document.addEventListener('mousedown', handleClickOutside);
            return ({
                "DateInput.useEffect": ()=>{
                    document.removeEventListener('mousedown', handleClickOutside);
                }
            })["DateInput.useEffect"];
        }
    }["DateInput.useEffect"], []);
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
    const openCalendar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "DateInput.useCallback[openCalendar]": ()=>{
            if (hiddenDateInputRef.current) {
                // Use the native date picker
                hiddenDateInputRef.current.showPicker?.();
            }
        }
    }["DateInput.useCallback[openCalendar]"], []);
    // Handle keyboard accessibility
    const handleKeyDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "DateInput.useCallback[handleKeyDown]": (e)=>{
            if (e.key === 'Escape') {
                setShowPicker(false);
            }
        }
    }["DateInput.useCallback[handleKeyDown]"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        onKeyDown: handleKeyDown,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "block text-xs text-[#696969] mb-1",
                children: [
                    label,
                    required && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-red-500 ml-0.5",
                        children: "*"
                    }, void 0, false, {
                        fileName: "[project]/components/ApplicationTracker/StatusForm.tsx",
                        lineNumber: 174,
                        columnNumber: 29
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ApplicationTracker/StatusForm.tsx",
                lineNumber: 173,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        ref: inputRef,
                        type: "text",
                        value: inputValue,
                        onChange: handleInputChange,
                        placeholder: placeholder,
                        className: "w-full h-10 px-3 border border-[#E6EAF2] rounded focus:outline-none focus:ring-1 focus:ring-[#0B498B] text-sm placeholder-[#A0A0A0] pr-10",
                        "aria-label": `${label} in format DD/MM/YYYY`
                    }, void 0, false, {
                        fileName: "[project]/components/ApplicationTracker/StatusForm.tsx",
                        lineNumber: 177,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: openCalendar,
                        className: "absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none",
                        "aria-label": "Open date picker",
                        title: "Open date picker",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            width: "16",
                            height: "16",
                            viewBox: "0 0 16 16",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M12.6667 2.66675H3.33333C2.59695 2.66675 2 3.2637 2 4.00008V13.3334C2 14.0698 2.59695 14.6667 3.33333 14.6667H12.6667C13.403 14.6667 14 14.0698 14 13.3334V4.00008C14 3.2637 13.403 2.66675 12.6667 2.66675Z",
                                    stroke: "#A0A0A0",
                                    strokeWidth: "1.33333",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round"
                                }, void 0, false, {
                                    fileName: "[project]/components/ApplicationTracker/StatusForm.tsx",
                                    lineNumber: 194,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M10.6667 1.33325V3.99992",
                                    stroke: "#A0A0A0",
                                    strokeWidth: "1.33333",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round"
                                }, void 0, false, {
                                    fileName: "[project]/components/ApplicationTracker/StatusForm.tsx",
                                    lineNumber: 195,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M5.33325 1.33325V3.99992",
                                    stroke: "#A0A0A0",
                                    strokeWidth: "1.33333",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round"
                                }, void 0, false, {
                                    fileName: "[project]/components/ApplicationTracker/StatusForm.tsx",
                                    lineNumber: 196,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M2 6.66675H14",
                                    stroke: "#A0A0A0",
                                    strokeWidth: "1.33333",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round"
                                }, void 0, false, {
                                    fileName: "[project]/components/ApplicationTracker/StatusForm.tsx",
                                    lineNumber: 197,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ApplicationTracker/StatusForm.tsx",
                            lineNumber: 193,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/ApplicationTracker/StatusForm.tsx",
                        lineNumber: 186,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        ref: hiddenDateInputRef,
                        type: "date",
                        className: "sr-only",
                        defaultValue: value || '',
                        onChange: handleDatePickerChange,
                        "aria-hidden": "true"
                    }, void 0, false, {
                        fileName: "[project]/components/ApplicationTracker/StatusForm.tsx",
                        lineNumber: 202,
                        columnNumber: 9
                    }, this),
                    showPicker && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute z-10 mt-1 w-full bg-white rounded-md shadow-lg border border-gray-300",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            ref: pickerRef,
                            type: "date",
                            defaultValue: value || '',
                            onChange: handleDatePickerChange,
                            className: "w-full px-3 py-2 border-0 focus:outline-none focus:ring-1 focus:ring-[#0B498B]",
                            "aria-label": `Date picker for ${label}`
                        }, void 0, false, {
                            fileName: "[project]/components/ApplicationTracker/StatusForm.tsx",
                            lineNumber: 213,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/ApplicationTracker/StatusForm.tsx",
                        lineNumber: 212,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ApplicationTracker/StatusForm.tsx",
                lineNumber: 176,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ApplicationTracker/StatusForm.tsx",
        lineNumber: 172,
        columnNumber: 5
    }, this);
};
_s(DateInput, "SSmCZThWq4hSadi0jLyKNYS+FR0=");
_c = DateInput;
const StatusForm = ({ onSearch })=>{
    _s1();
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        referenceNo: "",
        customerType: "",
        customer: "",
        travelersName: "",
        travelersPassportNo: "",
        visaBranch: "",
        entryGenerationBranch: "",
        fromDate: "",
        toDate: "",
        queue: "In Transit Queue",
        status: "Doc Received",
        country: "",
        billingToCompany: ""
    });
    const createOptions = (items)=>{
        return items.map((item)=>({
                label: item,
                value: item
            }));
    };
    const customerTypeOptions = createOptions([
        "Individual",
        "Corporate",
        "Family"
    ]);
    const visaBranchOptions = createOptions([
        "Branch 1",
        "Branch 2",
        "Branch 3"
    ]);
    const entryGenerationOptions = createOptions([
        "Branch 1",
        "Branch 2",
        "Branch 3"
    ]);
    const queueOptions = createOptions([
        "In Transit Queue",
        "Processing Queue",
        "Completed Queue"
    ]);
    const statusOptions = createOptions([
        "Doc Received",
        "Processing",
        "Approved",
        "Rejected"
    ]);
    const countryOptions = createOptions([
        "United States",
        "United Kingdom",
        "Canada",
        "Australia"
    ]);
    const handleChange = (field, value)=>{
        setFormData({
            ...formData,
            [field]: value
        });
    };
    // Adapter function to convert the DateInput component's onChange handler to work with handleChange
    const handleDateInputChange = (e)=>{
        const { name, value } = e.target;
        handleChange(name, value);
    };
    const handleSubmit = (e)=>{
        e.preventDefault();
        onSearch(formData);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "px-6 py-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-lg font-medium text-[#1C1C1C] pb-3 border-b border-[#E6EAF2] mb-6",
                children: "Check Realtime Status Online"
            }, void 0, false, {
                fileName: "[project]/components/ApplicationTracker/StatusForm.tsx",
                lineNumber: 276,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: handleSubmit,
                className: "space-y-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-5 gap-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-xs text-[#696969] mb-1",
                                        children: "Reference No"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ApplicationTracker/StatusForm.tsx",
                                        lineNumber: 284,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        value: formData.referenceNo,
                                        onChange: (e)=>handleChange("referenceNo", e.target.value),
                                        className: "w-full h-10 px-3 border border-[#E6EAF2] rounded focus:outline-none focus:ring-1 focus:ring-[#0B498B] text-sm placeholder-[#A0A0A0]",
                                        placeholder: "Enter ref no."
                                    }, void 0, false, {
                                        fileName: "[project]/components/ApplicationTracker/StatusForm.tsx",
                                        lineNumber: 287,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ApplicationTracker/StatusForm.tsx",
                                lineNumber: 283,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-xs text-[#696969] mb-1",
                                        children: "Customer Type"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ApplicationTracker/StatusForm.tsx",
                                        lineNumber: 297,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$common$2f$CustomDropdown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        options: customerTypeOptions,
                                        value: formData.customerType || '',
                                        onChange: (value)=>handleChange("customerType", value),
                                        placeholder: "Select",
                                        className: "h-10"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ApplicationTracker/StatusForm.tsx",
                                        lineNumber: 298,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ApplicationTracker/StatusForm.tsx",
                                lineNumber: 296,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-xs text-[#696969] mb-1",
                                        children: "Customer"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ApplicationTracker/StatusForm.tsx",
                                        lineNumber: 308,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        value: formData.customer,
                                        onChange: (e)=>handleChange("customer", e.target.value),
                                        className: "w-full h-10 px-3 border border-[#E6EAF2] rounded focus:outline-none focus:ring-1 focus:ring-[#0B498B] text-sm placeholder-[#A0A0A0]",
                                        placeholder: "Enter customer"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ApplicationTracker/StatusForm.tsx",
                                        lineNumber: 311,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ApplicationTracker/StatusForm.tsx",
                                lineNumber: 307,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-xs text-[#696969] mb-1",
                                        children: "Traveler's Name"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ApplicationTracker/StatusForm.tsx",
                                        lineNumber: 321,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        value: formData.travelersName,
                                        onChange: (e)=>handleChange("travelersName", e.target.value),
                                        className: "w-full h-10 px-3 border border-[#E6EAF2] rounded focus:outline-none focus:ring-1 focus:ring-[#0B498B] text-sm placeholder-[#A0A0A0]",
                                        placeholder: "Enter name"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ApplicationTracker/StatusForm.tsx",
                                        lineNumber: 324,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ApplicationTracker/StatusForm.tsx",
                                lineNumber: 320,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-xs text-[#696969] mb-1",
                                        children: "Traveler's Passport No"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ApplicationTracker/StatusForm.tsx",
                                        lineNumber: 334,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        value: formData.travelersPassportNo,
                                        onChange: (e)=>handleChange("travelersPassportNo", e.target.value),
                                        className: "w-full h-10 px-3 border border-[#E6EAF2] rounded focus:outline-none focus:ring-1 focus:ring-[#0B498B] text-sm placeholder-[#A0A0A0]",
                                        placeholder: "Enter passport no."
                                    }, void 0, false, {
                                        fileName: "[project]/components/ApplicationTracker/StatusForm.tsx",
                                        lineNumber: 337,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ApplicationTracker/StatusForm.tsx",
                                lineNumber: 333,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ApplicationTracker/StatusForm.tsx",
                        lineNumber: 282,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-5 gap-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-xs text-[#696969] mb-1",
                                        children: "Visa Branch"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ApplicationTracker/StatusForm.tsx",
                                        lineNumber: 350,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$common$2f$CustomDropdown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        options: visaBranchOptions,
                                        value: formData.visaBranch || '',
                                        onChange: (value)=>handleChange("visaBranch", value),
                                        placeholder: "Select",
                                        className: "h-10"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ApplicationTracker/StatusForm.tsx",
                                        lineNumber: 353,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ApplicationTracker/StatusForm.tsx",
                                lineNumber: 349,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-xs text-[#696969] mb-1",
                                        children: "Entry Generation Branch"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ApplicationTracker/StatusForm.tsx",
                                        lineNumber: 363,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$common$2f$CustomDropdown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        options: entryGenerationOptions,
                                        value: formData.entryGenerationBranch || '',
                                        onChange: (value)=>handleChange("entryGenerationBranch", value),
                                        placeholder: "Select",
                                        className: "h-10"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ApplicationTracker/StatusForm.tsx",
                                        lineNumber: 366,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ApplicationTracker/StatusForm.tsx",
                                lineNumber: 362,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DateInput, {
                                name: "fromDate",
                                value: formData.fromDate,
                                onChange: handleDateInputChange,
                                label: "From Date",
                                placeholder: "DD/MM/YYYY"
                            }, void 0, false, {
                                fileName: "[project]/components/ApplicationTracker/StatusForm.tsx",
                                lineNumber: 375,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DateInput, {
                                name: "toDate",
                                value: formData.toDate,
                                onChange: handleDateInputChange,
                                label: "To Date",
                                placeholder: "DD/MM/YYYY"
                            }, void 0, false, {
                                fileName: "[project]/components/ApplicationTracker/StatusForm.tsx",
                                lineNumber: 383,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-xs text-[#696969] mb-1",
                                        children: "Queue"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ApplicationTracker/StatusForm.tsx",
                                        lineNumber: 392,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$common$2f$CustomDropdown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        options: queueOptions,
                                        value: formData.queue || '',
                                        onChange: (value)=>handleChange("queue", value),
                                        placeholder: "Select",
                                        className: "h-10"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ApplicationTracker/StatusForm.tsx",
                                        lineNumber: 393,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ApplicationTracker/StatusForm.tsx",
                                lineNumber: 391,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ApplicationTracker/StatusForm.tsx",
                        lineNumber: 348,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-5 gap-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-xs text-[#696969] mb-1",
                                        children: "Status"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ApplicationTracker/StatusForm.tsx",
                                        lineNumber: 406,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$common$2f$CustomDropdown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        options: statusOptions,
                                        value: formData.status || '',
                                        onChange: (value)=>handleChange("status", value),
                                        placeholder: "Select",
                                        className: "h-10"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ApplicationTracker/StatusForm.tsx",
                                        lineNumber: 407,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ApplicationTracker/StatusForm.tsx",
                                lineNumber: 405,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-xs text-[#696969] mb-1",
                                        children: "Country"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ApplicationTracker/StatusForm.tsx",
                                        lineNumber: 417,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$common$2f$CustomDropdown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        options: countryOptions,
                                        value: formData.country || '',
                                        onChange: (value)=>handleChange("country", value),
                                        placeholder: "Select Country",
                                        className: "h-10"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ApplicationTracker/StatusForm.tsx",
                                        lineNumber: 418,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ApplicationTracker/StatusForm.tsx",
                                lineNumber: 416,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-xs text-[#696969] mb-1",
                                        children: "Billing to Company"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ApplicationTracker/StatusForm.tsx",
                                        lineNumber: 428,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        value: formData.billingToCompany,
                                        onChange: (e)=>handleChange("billingToCompany", e.target.value),
                                        className: "w-full h-10 px-3 border border-[#E6EAF2] rounded focus:outline-none focus:ring-1 focus:ring-[#0B498B] text-sm placeholder-[#A0A0A0]",
                                        placeholder: "Enter company"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ApplicationTracker/StatusForm.tsx",
                                        lineNumber: 431,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ApplicationTracker/StatusForm.tsx",
                                lineNumber: 427,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "col-span-1"
                            }, void 0, false, {
                                fileName: "[project]/components/ApplicationTracker/StatusForm.tsx",
                                lineNumber: 440,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-end items-end",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    className: "h-10 bg-[#0B498B] text-white px-5 rounded font-medium hover:bg-[#0A3E75] transition-colors",
                                    children: "Check Status"
                                }, void 0, false, {
                                    fileName: "[project]/components/ApplicationTracker/StatusForm.tsx",
                                    lineNumber: 443,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/ApplicationTracker/StatusForm.tsx",
                                lineNumber: 442,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ApplicationTracker/StatusForm.tsx",
                        lineNumber: 404,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ApplicationTracker/StatusForm.tsx",
                lineNumber: 280,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ApplicationTracker/StatusForm.tsx",
        lineNumber: 275,
        columnNumber: 5
    }, this);
};
_s1(StatusForm, "dBOiirL04f0YBT6OYQNp07s5ci0=");
_c1 = StatusForm;
const __TURBOPACK__default__export__ = StatusForm;
var _c, _c1;
__turbopack_context__.k.register(_c, "DateInput");
__turbopack_context__.k.register(_c1, "StatusForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/ApplicationTracker/StatusDetails.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const StatusDetails = ({ applications, isLoading, error, currentPage, totalPages, onPageChange })=>{
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-center items-center py-12",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "animate-spin h-8 w-8 text-[#0B498B]",
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        className: "opacity-25",
                        cx: "12",
                        cy: "12",
                        r: "10",
                        stroke: "currentColor",
                        strokeWidth: "4"
                    }, void 0, false, {
                        fileName: "[project]/components/ApplicationTracker/StatusDetails.tsx",
                        lineNumber: 20,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        className: "opacity-75",
                        fill: "currentColor",
                        d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    }, void 0, false, {
                        fileName: "[project]/components/ApplicationTracker/StatusDetails.tsx",
                        lineNumber: 28,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ApplicationTracker/StatusDetails.tsx",
                lineNumber: 14,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/ApplicationTracker/StatusDetails.tsx",
            lineNumber: 13,
            columnNumber: 7
        }, this);
    }
    if (error) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mx-6",
            children: error
        }, void 0, false, {
            fileName: "[project]/components/ApplicationTracker/StatusDetails.tsx",
            lineNumber: 40,
            columnNumber: 7
        }, this);
    }
    if (applications.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center py-12 text-gray-500 mx-6",
            children: "No applications found. Please adjust your search criteria and try again."
        }, void 0, false, {
            fileName: "[project]/components/ApplicationTracker/StatusDetails.tsx",
            lineNumber: 48,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "pb-6 rounded-2xl overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-6 pb-4 pt-5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-lg font-medium text-[#1C1C1C]",
                    children: "Status Details"
                }, void 0, false, {
                    fileName: "[project]/components/ApplicationTracker/StatusDetails.tsx",
                    lineNumber: 57,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ApplicationTracker/StatusDetails.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "overflow-x-auto -mx-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                    className: "min-w-full border-collapse border border-[#E6EAF2]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                className: "bg-[#F9FAFB] border-t border-b border-[#E6EAF2]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "py-4 px-4 text-center text-xs font-medium text-[#696969] uppercase border-r border-[#E6EAF2]",
                                        children: "Ref No"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ApplicationTracker/StatusDetails.tsx",
                                        lineNumber: 66,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "py-4 px-4 text-center text-xs font-medium text-[#696969] uppercase border-r border-[#E6EAF2]",
                                        children: "Handling Branch"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ApplicationTracker/StatusDetails.tsx",
                                        lineNumber: 67,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "py-4 px-4 text-center text-xs font-medium text-[#696969] uppercase whitespace-nowrap border-r border-[#E6EAF2]",
                                        children: "Entry Generation Branch"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ApplicationTracker/StatusDetails.tsx",
                                        lineNumber: 68,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "py-4 px-4 text-center text-xs font-medium text-[#696969] uppercase border-r border-[#E6EAF2]",
                                        children: "Agent/ Corporate"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ApplicationTracker/StatusDetails.tsx",
                                        lineNumber: 71,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "py-4 px-4 text-center text-xs font-medium text-[#696969] uppercase border-r border-[#E6EAF2]",
                                        children: "Billin to Company"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ApplicationTracker/StatusDetails.tsx",
                                        lineNumber: 72,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "py-4 px-4 text-center text-xs font-medium text-[#696969] uppercase border-r border-[#E6EAF2]",
                                        children: "Referrer"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ApplicationTracker/StatusDetails.tsx",
                                        lineNumber: 73,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "py-4 px-4 text-center text-xs font-medium text-[#696969] uppercase border-r border-[#E6EAF2]",
                                        children: "Country"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ApplicationTracker/StatusDetails.tsx",
                                        lineNumber: 74,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "py-4 px-4 text-center text-xs font-medium text-[#696969] uppercase border-r border-[#E6EAF2]",
                                        children: "Visa Type"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ApplicationTracker/StatusDetails.tsx",
                                        lineNumber: 75,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "py-4 px-4 text-center text-xs font-medium text-[#696969] uppercase border-r border-[#E6EAF2]",
                                        children: "Status"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ApplicationTracker/StatusDetails.tsx",
                                        lineNumber: 76,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "py-4 px-4 text-center text-xs font-medium text-[#696969] uppercase",
                                        children: "Action"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ApplicationTracker/StatusDetails.tsx",
                                        lineNumber: 77,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ApplicationTracker/StatusDetails.tsx",
                                lineNumber: 65,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/ApplicationTracker/StatusDetails.tsx",
                            lineNumber: 64,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                            children: applications.map((app, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    className: "border-b border-[#E6EAF2]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-4 py-4 text-sm text-[#0B498B] font-medium border-r border-[#E6EAF2] text-center",
                                            children: app.refNo.replace(/VIS(\d+)/, "DEL250097")
                                        }, void 0, false, {
                                            fileName: "[project]/components/ApplicationTracker/StatusDetails.tsx",
                                            lineNumber: 83,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-4 py-4 text-sm text-[#1C1C1C] border-r border-[#E6EAF2] text-center",
                                            children: "Visaistic Delhi"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ApplicationTracker/StatusDetails.tsx",
                                            lineNumber: 87,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-4 py-4 text-sm text-[#1C1C1C] border-r border-[#E6EAF2] text-center",
                                            children: "Visaistic Delhi"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ApplicationTracker/StatusDetails.tsx",
                                            lineNumber: 88,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-4 py-4 text-sm text-[#1C1C1C] border-r border-[#E6EAF2] text-center",
                                            children: [
                                                "Visaistic India",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                    fileName: "[project]/components/ApplicationTracker/StatusDetails.tsx",
                                                    lineNumber: 90,
                                                    columnNumber: 34
                                                }, this),
                                                "Private Limited"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/ApplicationTracker/StatusDetails.tsx",
                                            lineNumber: 89,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-4 py-4 text-sm text-[#1C1C1C] border-r border-[#E6EAF2] text-center",
                                            children: [
                                                "Fractal Analytics",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                    fileName: "[project]/components/ApplicationTracker/StatusDetails.tsx",
                                                    lineNumber: 93,
                                                    columnNumber: 36
                                                }, this),
                                                "Limited - Ggn"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/ApplicationTracker/StatusDetails.tsx",
                                            lineNumber: 92,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-4 py-4 text-sm text-[#1C1C1C] border-r border-[#E6EAF2] text-center",
                                            children: "Sona"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ApplicationTracker/StatusDetails.tsx",
                                            lineNumber: 95,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-4 py-4 text-sm text-[#1C1C1C] border-r border-[#E6EAF2] text-center",
                                            children: "Spain"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ApplicationTracker/StatusDetails.tsx",
                                            lineNumber: 96,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-4 py-4 text-sm text-[#1C1C1C] border-r border-[#E6EAF2] text-center",
                                            children: "Business"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ApplicationTracker/StatusDetails.tsx",
                                            lineNumber: 97,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-4 py-4 text-sm text-[#1C1C1C] border-r border-[#E6EAF2] text-center",
                                            children: [
                                                "Dox",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                    fileName: "[project]/components/ApplicationTracker/StatusDetails.tsx",
                                                    lineNumber: 99,
                                                    columnNumber: 22
                                                }, this),
                                                "Received"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/ApplicationTracker/StatusDetails.tsx",
                                            lineNumber: 98,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-4 py-4 text-sm text-[#0B498B] font-medium text-center",
                                            children: "EDIT"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ApplicationTracker/StatusDetails.tsx",
                                            lineNumber: 101,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, `${app.refNo}-${index}`, true, {
                                    fileName: "[project]/components/ApplicationTracker/StatusDetails.tsx",
                                    lineNumber: 82,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/ApplicationTracker/StatusDetails.tsx",
                            lineNumber: 80,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ApplicationTracker/StatusDetails.tsx",
                    lineNumber: 63,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ApplicationTracker/StatusDetails.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-center mt-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "inline-flex items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>onPageChange(currentPage - 1),
                            disabled: currentPage === 1,
                            className: "flex items-center px-4 py-2 text-sm text-[#1C1C1C] border border-[#E6EAF2] rounded-md mr-2 disabled:opacity-50 disabled:cursor-not-allowed",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "16",
                                    height: "16",
                                    viewBox: "0 0 16 16",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    className: "mr-1",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M10 12L6 8L10 4",
                                        stroke: "#1C1C1C",
                                        strokeWidth: "1.5",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ApplicationTracker/StatusDetails.tsx",
                                        lineNumber: 119,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/ApplicationTracker/StatusDetails.tsx",
                                    lineNumber: 118,
                                    columnNumber: 13
                                }, this),
                                "Prev"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ApplicationTracker/StatusDetails.tsx",
                            lineNumber: 113,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex space-x-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>onPageChange(1),
                                    className: `w-8 h-8 flex items-center justify-center text-sm border rounded-md ${1 === currentPage ? "bg-[#0B498B] text-white border-[#0B498B]" : "bg-white text-[#1C1C1C] border-[#E6EAF2]"}`,
                                    children: "1"
                                }, void 0, false, {
                                    fileName: "[project]/components/ApplicationTracker/StatusDetails.tsx",
                                    lineNumber: 125,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>onPageChange(2),
                                    className: `w-8 h-8 flex items-center justify-center text-sm border rounded-md ${2 === currentPage ? "bg-[#0B498B] text-white border-[#0B498B]" : "bg-white text-[#1C1C1C] border-[#E6EAF2]"}`,
                                    children: "2"
                                }, void 0, false, {
                                    fileName: "[project]/components/ApplicationTracker/StatusDetails.tsx",
                                    lineNumber: 135,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>onPageChange(3),
                                    className: `w-8 h-8 flex items-center justify-center text-sm border rounded-md ${3 === currentPage ? "bg-[#0B498B] text-white border-[#0B498B]" : "bg-white text-[#1C1C1C] border-[#E6EAF2]"}`,
                                    children: "3"
                                }, void 0, false, {
                                    fileName: "[project]/components/ApplicationTracker/StatusDetails.tsx",
                                    lineNumber: 145,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>onPageChange(4),
                                    className: `w-8 h-8 flex items-center justify-center text-sm border rounded-md ${4 === currentPage ? "bg-[#0B498B] text-white border-[#0B498B]" : "bg-white text-[#1C1C1C] border-[#E6EAF2]"}`,
                                    children: "4"
                                }, void 0, false, {
                                    fileName: "[project]/components/ApplicationTracker/StatusDetails.tsx",
                                    lineNumber: 155,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>onPageChange(5),
                                    className: `w-8 h-8 flex items-center justify-center text-sm border rounded-md ${5 === currentPage ? "bg-[#0B498B] text-white border-[#0B498B]" : "bg-white text-[#1C1C1C] border-[#E6EAF2]"}`,
                                    children: "5"
                                }, void 0, false, {
                                    fileName: "[project]/components/ApplicationTracker/StatusDetails.tsx",
                                    lineNumber: 165,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>onPageChange(6),
                                    className: `w-8 h-8 flex items-center justify-center text-sm border rounded-md ${6 === currentPage ? "bg-[#0B498B] text-white border-[#0B498B]" : "bg-white text-[#1C1C1C] border-[#E6EAF2]"}`,
                                    children: "6"
                                }, void 0, false, {
                                    fileName: "[project]/components/ApplicationTracker/StatusDetails.tsx",
                                    lineNumber: 175,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>onPageChange(7),
                                    className: `w-8 h-8 flex items-center justify-center text-sm border rounded-md ${7 === currentPage ? "bg-[#0B498B] text-white border-[#0B498B]" : "bg-white text-[#1C1C1C] border-[#E6EAF2]"}`,
                                    children: "7"
                                }, void 0, false, {
                                    fileName: "[project]/components/ApplicationTracker/StatusDetails.tsx",
                                    lineNumber: 185,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "w-8 h-8 flex items-center justify-center text-sm",
                                    children: ".."
                                }, void 0, false, {
                                    fileName: "[project]/components/ApplicationTracker/StatusDetails.tsx",
                                    lineNumber: 195,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>onPageChange(20),
                                    className: `w-8 h-8 flex items-center justify-center text-sm border rounded-md ${20 === currentPage ? "bg-[#0B498B] text-white border-[#0B498B]" : "bg-white text-[#1C1C1C] border-[#E6EAF2]"}`,
                                    children: "20"
                                }, void 0, false, {
                                    fileName: "[project]/components/ApplicationTracker/StatusDetails.tsx",
                                    lineNumber: 198,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ApplicationTracker/StatusDetails.tsx",
                            lineNumber: 124,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>onPageChange(currentPage + 1),
                            disabled: currentPage === totalPages,
                            className: "flex items-center px-4 py-2 text-sm text-[#1C1C1C] border border-[#E6EAF2] rounded-md ml-2 disabled:opacity-50 disabled:cursor-not-allowed",
                            children: [
                                "Next",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "16",
                                    height: "16",
                                    viewBox: "0 0 16 16",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    className: "ml-1",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M6 4L10 8L6 12",
                                        stroke: "#1C1C1C",
                                        strokeWidth: "1.5",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ApplicationTracker/StatusDetails.tsx",
                                        lineNumber: 217,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/ApplicationTracker/StatusDetails.tsx",
                                    lineNumber: 216,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ApplicationTracker/StatusDetails.tsx",
                            lineNumber: 210,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ApplicationTracker/StatusDetails.tsx",
                    lineNumber: 112,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ApplicationTracker/StatusDetails.tsx",
                lineNumber: 111,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ApplicationTracker/StatusDetails.tsx",
        lineNumber: 55,
        columnNumber: 5
    }, this);
};
_c = StatusDetails;
const __TURBOPACK__default__export__ = StatusDetails;
var _c;
__turbopack_context__.k.register(_c, "StatusDetails");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/data/mock-applications.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "mockApplications": (()=>mockApplications)
});
const mockApplications = [
    {
        refNo: "VIS23001",
        handlingBranch: "Delhi",
        entryGenerationBranch: "Delhi",
        agentCorporate: "Travel Experts",
        billingToCompany: "ABC Corp",
        referrer: "John Smith",
        country: "United States",
        visaType: "Tourist",
        status: "In Process"
    },
    {
        refNo: "VIS23002",
        handlingBranch: "Mumbai",
        entryGenerationBranch: "Mumbai",
        agentCorporate: "Global Travels",
        billingToCompany: "XYZ Ltd",
        referrer: "Sarah Johnson",
        country: "United Kingdom",
        visaType: "Business",
        status: "Approved"
    },
    {
        refNo: "VIS23003",
        handlingBranch: "Bangalore",
        entryGenerationBranch: "Bangalore",
        agentCorporate: "Visa Services Inc",
        billingToCompany: "Tech Solutions",
        referrer: "Michael Brown",
        country: "Canada",
        visaType: "Student",
        status: "Submitted"
    },
    {
        refNo: "VIS23004",
        handlingBranch: "Chennai",
        entryGenerationBranch: "Delhi",
        agentCorporate: "Easy Visa",
        billingToCompany: "Global Corp",
        referrer: "Lisa Davis",
        country: "Australia",
        visaType: "Work",
        status: "Doc Received"
    },
    {
        refNo: "VIS23005",
        handlingBranch: "Hyderabad",
        entryGenerationBranch: "Hyderabad",
        agentCorporate: "Travel Masters",
        billingToCompany: "Innovative Tech",
        referrer: "James Wilson",
        country: "Germany",
        visaType: "Tourist",
        status: "Ready for Collection"
    },
    {
        refNo: "VIS23006",
        handlingBranch: "Kolkata",
        entryGenerationBranch: "Kolkata",
        agentCorporate: "Visa Pro",
        billingToCompany: "Smart Solutions",
        referrer: "David Miller",
        country: "France",
        visaType: "Business",
        status: "In Process"
    },
    {
        refNo: "VIS23007",
        handlingBranch: "Pune",
        entryGenerationBranch: "Pune",
        agentCorporate: "GlobeWide",
        billingToCompany: "Future Tech",
        referrer: "Elizabeth Taylor",
        country: "Spain",
        visaType: "Tourist",
        status: "Submitted"
    },
    {
        refNo: "VIS23008",
        handlingBranch: "Delhi",
        entryGenerationBranch: "Mumbai",
        agentCorporate: "Travel Services",
        billingToCompany: "Global Solutions",
        referrer: "Robert Johnson",
        country: "Italy",
        visaType: "Student",
        status: "Doc Received"
    },
    {
        refNo: "VIS23009",
        handlingBranch: "Mumbai",
        entryGenerationBranch: "Delhi",
        agentCorporate: "Visa Experts",
        billingToCompany: "Digital Corp",
        referrer: "Patricia Lewis",
        country: "Japan",
        visaType: "Work",
        status: "Approved"
    },
    {
        refNo: "VIS23010",
        handlingBranch: "Bangalore",
        entryGenerationBranch: "Bangalore",
        agentCorporate: "Global Travels",
        billingToCompany: "Modern Tech",
        referrer: "Thomas Williams",
        country: "United States",
        visaType: "Tourist",
        status: "Ready for Collection"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/ApplicationTracker/ApplicationTracker.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ApplicationTracker$2f$StatusForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ApplicationTracker/StatusForm.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ApplicationTracker$2f$StatusDetails$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ApplicationTracker/StatusDetails.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$mock$2d$applications$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/mock-applications.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const ApplicationTracker = ()=>{
    _s();
    const [searchData, setSearchData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [applications, setApplications] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [currentPage, setCurrentPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [totalPages, setTotalPages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const handleSearch = (data)=>{
        setIsLoading(true);
        setError(null);
        // Simulate API call with a timeout
        setTimeout(()=>{
            try {
                // For demo purposes, we're using mock data
                const filteredApplications = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$mock$2d$applications$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockApplications"];
                setApplications(filteredApplications);
                setTotalPages(Math.ceil(filteredApplications.length / 10));
                setCurrentPage(1);
                setSearchData(data);
            } catch (err) {
                setError("An error occurred while fetching data. Please try again.");
            } finally{
                setIsLoading(false);
            }
        }, 1000);
    };
    const handlePageChange = (page)=>{
        setCurrentPage(page);
    // In a real app, you would fetch the specific page from the backend
    // For now, we'll just update the current page state
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "px-[80px]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center pt-[32px] pb-[24px]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-[#1C1C1C] text-[28px] font-bold mt-0",
                    children: "Application Tracker"
                }, void 0, false, {
                    fileName: "[project]/components/ApplicationTracker/ApplicationTracker.tsx",
                    lineNumber: 47,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ApplicationTracker/ApplicationTracker.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-2xl border border-[#E6EAF2] shadow-sm mb-6 overflow-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ApplicationTracker$2f$StatusForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    onSearch: handleSearch
                }, void 0, false, {
                    fileName: "[project]/components/ApplicationTracker/ApplicationTracker.tsx",
                    lineNumber: 53,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ApplicationTracker/ApplicationTracker.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            searchData && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-2xl border border-[#E6EAF2] shadow-sm overflow-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ApplicationTracker$2f$StatusDetails$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    applications: applications,
                    isLoading: isLoading,
                    error: error,
                    currentPage: currentPage,
                    totalPages: totalPages,
                    onPageChange: handlePageChange
                }, void 0, false, {
                    fileName: "[project]/components/ApplicationTracker/ApplicationTracker.tsx",
                    lineNumber: 58,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ApplicationTracker/ApplicationTracker.tsx",
                lineNumber: 57,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ApplicationTracker/ApplicationTracker.tsx",
        lineNumber: 45,
        columnNumber: 5
    }, this);
};
_s(ApplicationTracker, "eQFuA9FEEXZYSlIvjCouc5BuTzQ=");
_c = ApplicationTracker;
const __TURBOPACK__default__export__ = ApplicationTracker;
var _c;
__turbopack_context__.k.register(_c, "ApplicationTracker");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/application-tracker/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// app/application-tracker/page.tsx
__turbopack_context__.s({
    "default": (()=>ApplicationTrackerPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ApplicationTracker$2f$ApplicationTracker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ApplicationTracker/ApplicationTracker.tsx [app-client] (ecmascript)");
"use client";
;
;
function ApplicationTrackerPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-[#E6EAF2] min-h-screen",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ApplicationTracker$2f$ApplicationTracker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/app/application-tracker/page.tsx",
            lineNumber: 9,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/application-tracker/page.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
_c = ApplicationTrackerPage;
var _c;
__turbopack_context__.k.register(_c, "ApplicationTrackerPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=_8bf94f3a._.js.map