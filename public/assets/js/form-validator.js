function _classCallCheck(a, b) { if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function") } function _defineProperties(a, b) { for (var c, d = 0; d < b.length; d++)c = b[d], c.enumerable = c.enumerable || !1, c.configurable = !0, "value" in c && (c.writable = !0), Object.defineProperty(a, c.key, c) } function _createClass(a, b, c) { return b && _defineProperties(a.prototype, b), c && _defineProperties(a, c), a } function _defineProperty(a, b, c) { return b in a ? Object.defineProperty(a, b, { value: c, enumerable: !0, configurable: !0, writable: !0 }) : a[b] = c, a } let formValidator = function () { function a(b, c) { if (_classCallCheck(this, a), _defineProperty(this, "isDisplayError", !1), _defineProperty(this, "allValid", !1), _defineProperty(this, "pushElement", !1), _defineProperty(this, "debounceTime", 1e3), _defineProperty(this, "debounceSetTimeout", void 0), _defineProperty(this, "dangerColor", "#ffd9d7bd"), _defineProperty(this, "successColor", "white"), _defineProperty(this, "errorHash", { required: " field is required", number: " field must be a valid number", decimal: " field must be a valid decimal", price: " field must be a valid Price", max: " field can not be greater than ", min: " field can not be less than ", not: " field can not be ", regex: " field is not valid " }), _defineProperty(this, "elem2Validate", void 0), _defineProperty(this, "elem2ValidateListener", "input"), _defineProperty(this, "elsInValidator", void 0), _defineProperty(this, "booleanElements", []), _defineProperty(this, "validatorForm", void 0), !!b) { const a = !!b.getAttribute("data-validate-init"); this.initialize(b, a, c) } } return _createClass(a, [{ key: "initialize", value: function initialize(a, b, c) { c && this.setOptions(c), b && (this.isDisplayError = !0), this.elem2Validate = a, this.elsInValidator = this.elem2Validate.querySelectorAll("[data-validate]"), this.booleanElements = [], this.elsInValidator.forEach(() => this.booleanElements.push(!1)), this.elem2ValidateForm = this.elem2Validate.querySelector("form"), this.startValidator(), this.listenInnerForm() } }, { key: "setOptions", value: function setOptions(a) { this.sortedArr = a.sortedArr || !1, this.pushElement = a.pushElement || !1, this.debounceTime = a.debounceTime || 1e3, this.elem2ValidateListener = a.elem2ValidateListener || "input", this.dangerColor = a.dangerColor || "#ffd9d7bd", this.successColor = a.successColor || "white" } }, { key: "startValidator", value: function startValidator() { if (0 == this.elsInValidator.length) return void (this.allValid = !0); for (let a = 0; a < this.elsInValidator.length; a++) { const b = this.elsInValidator[a], c = b.getAttribute("data-validate"); c && (this.eachInputValidate(b, a), "INPUT" == b.nodeName || "TEXTAREA" == b.nodeName ? b.addEventListener(this.elem2ValidateListener, () => { this.debounceSetTimeout && clearTimeout(this.debounceSetTimeout), this.debounceSetTimeout = setTimeout(() => this.eachInputValidate(b, a, !0), this.debounceTime) }) : "SELECT" == b.nodeName && b.addEventListener("change", () => { this.eachInputValidate(b, a, !0) })) } } }, { key: "reArrangeArr", value: function reArrangeArr(a) { const b = []; return ["number", "decimal", "price", "required", "regex", "max", "min", "not"].forEach(c => { -1 != a.indexOf(c) && b.push(c) }), b } }, { key: "eachInputValidate", value: function eachInputValidate(a, b, c) { const d = a.getAttribute("data-validate"); if (!d) return; const e = a.getAttribute("data-validate-errors"); let f = []; e && (f = e.split("|")); const g = a.value ? a.value.trim() : ""; let h = a.getAttribute("name"); h = h ? h : "This "; const i = a.getAttribute("data-validate-name"); i && (h = i); let j; this.sortedArr ? d.split("|") : j = this.reArrangeArr(d.split("|")); const k = {}; let l = "text"; for (let d = 0; d < j.length; d++) { const e = j[d].trim(); switch (k[e] = !0, e) { case "number": a.setAttribute("inputmode", "numeric"); const i = parseInt(g); if (g != i) return this.displayError(a, f[d] ? f[d] : h + " " + this.errorHash.number, c); this.clearError(a, b, d == j.length - 1), l = "number"; break; case "decimal": a.setAttribute("inputmode", "decimal"); const m = parseFloat(g); if (g != m) return this.displayError(a, f[d] ? f[d] : h + " " + this.errorHash.decimal, c); this.clearError(a, b, d == j.length - 1), l = "decimal"; break; case "price": a.setAttribute("inputmode", "decimal"); const n = g.match(/(\d+(\.)?(\d{1,2})?)/); if (!n) return this.displayError(a, f[d] ? f[d] : h + " " + this.errorHash.price, c); a.value = n[0], this.clearError(a, b, d == j.length - 1), l = "price"; break; case "required": if ("" == g || null == g) return this.displayError(a, f[d] ? f[d] : h + " " + this.errorHash.required, c); this.clearError(a, b, d == j.length - 1); break; case "regex": const o = a.getAttribute("regex"); if (!o) return; if (!g.match(new RegExp(o))) return this.displayError(a, f[d] ? f[d] : h + " " + this.errorHash.regex, c); this.clearError(a, b, d == j.length - 1); break; case "max": const p = parseInt(a.getAttribute("max")) ? parseInt(a.getAttribute("max")) : 0; if ("number" == l || "decimal" == l || "price" == l) { if (parseInt(g) > p || parseFloat(g) > p) return this.displayError(a, f[d] ? f[d] : h + " " + this.errorHash.max + p, c); this.clearError(a, b, d == j.length - 1) } if ("text" == l) { if (g.length > p) return this.displayError(a, f[d] ? f[d] : "".concat(h, " ").concat(this.errorHash.max, " ").concat(p, "  Characters. Remove ").concat(g.length - p), c); this.clearError(a, b, d == j.length - 1) } break; case "min": const q = parseInt(a.getAttribute("min")) ? parseInt(a.getAttribute("min")) : 0; if ("number" == l || "decimal" == l || "price" == l) { if (parseInt(g) < q || parseFloat(g) < q) return this.displayError(a, f[d] ? f[d] : h + " " + this.errorHash.min + q, c); this.clearError(a, b, d == j.length - 1) } if ("text" == l) { if (g.length < q) return this.displayError(a, f[d] ? f[d] : "".concat(h, "  ").concat(this.errorHash.min, "  ").concat(q, " Characters. Remaining ").concat(q - g.length), c); this.clearError(a, b, d == j.length - 1) } break; case "not": const r = a.getAttribute("not"); if (!r) continue; if (g == r) return this.displayError(a, f[d] ? f[d] : h + " " + this.errorHash.not + r, c); this.clearError(a, b, d == j.length - 1); break; default: } } } }, { key: "displayError", value: function displayError(a, b, c) { if (this.allValid = !1, this.isDisplayError || c) if (a) { a.style.position = "relative", a.style.flex = "auto", a.style.backgroundColor = this.dangerColor; const c = a.parentNode.querySelector(".validatorErrorDisplay"); if (!c) { const c = document.createElement("div"); c.style.backgroundColor = this.dangerColor, c.style.color = "#85221c", c.style.padding = "10px", c.style.borderBottomLeftRadius = "10px", c.style.borderBottomRightRadius = "10px", c.style.top = a.offsetHeight + "px", c.style.width = a.clientWidth + "px", c.innerText = b, c.className = "validatorErrorDisplay"; const d = document.createElement("span"); d.style.position = "relative", d.style.width = a.clientWidth + "px", d.className = "validatorErrorWrapper", d.style.display = "flex", d.style.flexWrap = "wrap", a.parentNode.insertBefore(d, a), d.appendChild(a), d.appendChild(c), this.pushElement && (c.style.position = "static") } else c.innerText = b; a.focus() } else document.querySelector(".validatorErrorDisplay").scrollIntoView({ behavior: "smooth", block: "center", inline: "start" }) } }, { key: "clearError", value: function clearError(a, b, c) { c && (this.booleanElements[b] = !0), a.style.backgroundColor = this.successColor; const d = a.parentElement, e = d.querySelector(".validatorErrorDisplay"); if (e) return d.style.display = "none", d.parentNode.insertBefore(a, d), d.parentElement.removeChild(d), void a.focus() } }, { key: "listenInnerForm", value: function listenInnerForm() { this.elem2ValidateForm && this.elem2ValidateForm.addEventListener("submit", a => { for (let b = 0; b < this.booleanElements.length; b++) { const a = this.booleanElements[b]; if (!a) break; b == this.booleanElements.length - 1 && (this.allValid = !0) } if (console.log(this.isDisplayError, this.allValid), !this.isDisplayError && !this.allValid) return a.preventDefault(), this.isDisplayError = !0, void this.initialize(this.elem2Validate, !0); if (document.querySelector(".validatorErrorDisplay")) return a.preventDefault(), void this.displayError(null, "Please check This form for errors"); const b = this.elem2Validate.getAttribute("data-validate-submit"); b && new Function(b)() }) } }]), a }();