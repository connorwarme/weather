(()=>{"use strict";var e={882:(e,t,r)=>{function n(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}r.d(t,{Z:()=>n})},99:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(13);function a(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}var o=r(882);function s(e){(0,o.Z)(1,arguments);var t=a(e);return(0,n.Z)(1e3*t)}},13:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(882);function a(e){(0,n.Z)(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"==typeof e&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}},923:(e,t,r)=>{r.d(t,{DR:()=>u,Jn:()=>i,MH:()=>s,XV:()=>o,az:()=>a,bq:()=>c});var n=r(99);const a=(e,t)=>{const r=document.createElement(`${e}`);return null==t||((e,t)=>{Object.entries(t).forEach((([t,r])=>{e.setAttribute(t,r)}))})(r,t),r},o=(e,t)=>{const r=(0,n.Z)(e),a=r.getTimezoneOffset();return r.setMinutes(r.getMinutes()+a),r.setMinutes(r.getMinutes()+t/60),r},s=e=>{let t=e;return e<10&&(t=`0${e}`),t},u=e=>{let t=e;return e>6&&(t=e-7),["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][t]},i=e=>({far:Math.round(Number(e)),cel:Math.round((Number(e)-32)*(5/9))}),c=e=>{let t="cel";return!1===e&&(t="far"),t}}},t={};function r(n){var a=t[n];if(void 0!==a)return a.exports;var o=t[n]={exports:{}};return e[n](o,o.exports,r),o.exports}r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(0,r(923).az)("div",{class:"forecastContainer"})})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9yZWNhc3QuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiJ3Q0FBZSxTQUFTQSxFQUFhQyxFQUFVQyxHQUM3QyxHQUFJQSxFQUFLQyxPQUFTRixFQUNoQixNQUFNLElBQUlHLFVBQVVILEVBQVcsYUFBZUEsRUFBVyxFQUFJLElBQU0sSUFBTSx1QkFBeUJDLEVBQUtDLE9BQVMsV0FFcEgsQyw0RENKZSxTQUFTRSxFQUFVQyxHQUNoQyxHQUFvQixPQUFoQkEsSUFBd0MsSUFBaEJBLElBQXdDLElBQWhCQSxFQUNsRCxPQUFPQyxJQUdULElBQUlDLEVBQVNDLE9BQU9ILEdBRXBCLE9BQUlJLE1BQU1GLEdBQ0RBLEVBR0ZBLEVBQVMsRUFBSUcsS0FBS0MsS0FBS0osR0FBVUcsS0FBS0UsTUFBTUwsRUFDckQsQyxhQ1NlLFNBQVNNLEVBQWFDLElBQ25DLEVBQUFmLEVBQUEsR0FBYSxFQUFHZ0IsV0FDaEIsSUFBSUMsRUFBV1osRUFBVVUsR0FDekIsT0FBTyxFQUFBRyxFQUFBLEdBQWtCLElBQVhELEVBQ2hCLEMsNkNDT2UsU0FBU0MsRUFBT0MsSUFDN0IsT0FBYSxFQUFHSCxXQUNoQixJQUFJSSxFQUFTQyxPQUFPQyxVQUFVQyxTQUFTQyxLQUFLTCxHQUU1QyxPQUFJQSxhQUFvQk0sTUFBNEIsaUJBQWJOLEdBQW9DLGtCQUFYQyxFQUV2RCxJQUFJSyxLQUFLTixFQUFTTyxXQUNJLGlCQUFiUCxHQUFvQyxvQkFBWEMsRUFDbEMsSUFBSUssS0FBS04sSUFFUyxpQkFBYkEsR0FBb0Msb0JBQVhDLEdBQW9ELG9CQUFaTyxVQUUzRUEsUUFBUUMsS0FBSyxzTkFFYkQsUUFBUUMsTUFBSyxJQUFJQyxPQUFRQyxRQUdwQixJQUFJTCxLQUFLbEIsS0FFcEIsQywyRkMvQ0EsTUFLTXdCLEVBQWdCLENBQUNDLEVBQU1DLEtBQ3pCLE1BQU1DLEVBQWFDLFNBQVNKLGNBQWMsR0FBR0MsS0FDN0MsT0FBa0IsTUFBZEMsR0FQYyxFQUFDRyxFQUFTSCxLQUM1QlosT0FBT2dCLFFBQVFKLEdBQVlLLFNBQVEsRUFBRUMsRUFBS0MsTUFDdENKLEVBQVFLLGFBQWFGLEVBQUtDLEVBQU0sR0FDbkMsRUFLREUsQ0FBY1IsRUFBWUQsR0FES0MsQ0FFZCxFQUdmUyxFQUFPLENBQUNDLEVBQU9DLEtBQ2pCLE1BQU1DLEdBQVksT0FBYUYsR0FDekJHLEVBQWNELEVBQVVFLG9CQUc5QixPQUZBRixFQUFVRyxXQUFXSCxFQUFVSSxhQUFlSCxHQUM5Q0QsRUFBVUcsV0FBV0gsRUFBVUksYUFBZ0JMLEVBQVMsSUFDakRDLENBQVMsRUFFZEssRUFBYVAsSUFDZixJQUFJUSxFQUFVUixFQUlkLE9BSElBLEVBQVEsS0FDUlEsRUFBVSxJQUFJUixLQUVYUSxDQUFPLEVBb0JaQyxFQUFhVCxJQUNmLElBQUlKLEVBQVFJLEVBS1osT0FKSUEsRUFBUSxJQUNSSixFQUFRSSxFQUFRLEdBRVAsQ0FBQyxTQUFVLFNBQVUsVUFBVyxZQUFhLFdBQVksU0FBVSxZQUNwRUosRUFBTSxFQUloQmMsRUFBVVYsSUFDSSxDQUNaVyxJQUFLNUMsS0FBSzZDLE1BQU0vQyxPQUFPbUMsSUFDdkJhLElBQUs5QyxLQUFLNkMsT0FBTy9DLE9BQU9tQyxHQUFTLEtBQU8sRUFBRSxNQUs1Q2MsRUFBWUMsSUFDZCxJQUFJbkIsRUFBUSxNQUlaLE9BSGdCLElBQVptQixJQUNBbkIsRUFBUSxPQUVMQSxDQUFLLEMsR0N0RVpvQixFQUEyQixDQUFDLEVBR2hDLFNBQVNDLEVBQW9CQyxHQUU1QixJQUFJQyxFQUFlSCxFQUF5QkUsR0FDNUMsUUFBcUJFLElBQWpCRCxFQUNILE9BQU9BLEVBQWFFLFFBR3JCLElBQUlDLEVBQVNOLEVBQXlCRSxHQUFZLENBR2pERyxRQUFTLENBQUMsR0FPWCxPQUhBRSxFQUFvQkwsR0FBVUksRUFBUUEsRUFBT0QsUUFBU0osR0FHL0NLLEVBQU9ELE9BQ2YsQ0NyQkFKLEVBQW9CTyxFQUFJLENBQUNILEVBQVNJLEtBQ2pDLElBQUksSUFBSTlCLEtBQU84QixFQUNYUixFQUFvQlMsRUFBRUQsRUFBWTlCLEtBQVNzQixFQUFvQlMsRUFBRUwsRUFBUzFCLElBQzVFbEIsT0FBT2tELGVBQWVOLEVBQVMxQixFQUFLLENBQUVpQyxZQUFZLEVBQU1DLElBQUtKLEVBQVc5QixJQUUxRSxFQ05Ec0IsRUFBb0JTLEVBQUksQ0FBQ0ksRUFBS0MsSUFBVXRELE9BQU9DLFVBQVVzRCxlQUFlcEQsS0FBS2tELEVBQUtDLElDRzVELEUsT0FBQSxJQUFjLE1BQU8sQ0FBQ0UsTUFBTyxxQiIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXIvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2Zyb21Vbml4VGltZS9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS90b0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy91dGlsaXR5LmpzIiwid2VicGFjazovL3dlYXRoZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvZGlzcGxheUZvcmVjYXN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlcXVpcmVkQXJncyhyZXF1aXJlZCwgYXJncykge1xuICBpZiAoYXJncy5sZW5ndGggPCByZXF1aXJlZCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocmVxdWlyZWQgKyAnIGFyZ3VtZW50JyArIChyZXF1aXJlZCA+IDEgPyAncycgOiAnJykgKyAnIHJlcXVpcmVkLCBidXQgb25seSAnICsgYXJncy5sZW5ndGggKyAnIHByZXNlbnQnKTtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvSW50ZWdlcihkaXJ0eU51bWJlcikge1xuICBpZiAoZGlydHlOdW1iZXIgPT09IG51bGwgfHwgZGlydHlOdW1iZXIgPT09IHRydWUgfHwgZGlydHlOdW1iZXIgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIE5hTjtcbiAgfVxuXG4gIHZhciBudW1iZXIgPSBOdW1iZXIoZGlydHlOdW1iZXIpO1xuXG4gIGlmIChpc05hTihudW1iZXIpKSB7XG4gICAgcmV0dXJuIG51bWJlcjtcbiAgfVxuXG4gIHJldHVybiBudW1iZXIgPCAwID8gTWF0aC5jZWlsKG51bWJlcikgOiBNYXRoLmZsb29yKG51bWJlcik7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgZnJvbVVuaXhUaW1lXG4gKiBAY2F0ZWdvcnkgVGltZXN0YW1wIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENyZWF0ZSBhIGRhdGUgZnJvbSBhIFVuaXggdGltZXN0YW1wLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ3JlYXRlIGEgZGF0ZSBmcm9tIGEgVW5peCB0aW1lc3RhbXAgKGluIHNlY29uZHMpLiBEZWNpbWFsIHZhbHVlcyB3aWxsIGJlIGRpc2NhcmRlZC5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gdW5peFRpbWUgLSB0aGUgZ2l2ZW4gVW5peCB0aW1lc3RhbXAgKGluIHNlY29uZHMpXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIGRhdGVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDcmVhdGUgdGhlIGRhdGUgMjkgRmVicnVhcnkgMjAxMiAxMTo0NTowNTpcbiAqIGNvbnN0IHJlc3VsdCA9IGZyb21Vbml4VGltZSgxMzMwNTE1OTA1KVxuICogLy89PiBXZWQgRmViIDI5IDIwMTIgMTE6NDU6MDVcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmcm9tVW5peFRpbWUoZGlydHlVbml4VGltZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIHVuaXhUaW1lID0gdG9JbnRlZ2VyKGRpcnR5VW5peFRpbWUpO1xuICByZXR1cm4gdG9EYXRlKHVuaXhUaW1lICogMTAwMCk7XG59IiwiaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgdG9EYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBpdHMgY2xvbmUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGEgbnVtYmVyLCBpdCBpcyB0cmVhdGVkIGFzIGEgdGltZXN0YW1wLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBub25lIG9mIHRoZSBhYm92ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqICoqTm90ZSoqOiAqYWxsKiBEYXRlIGFyZ3VtZW50cyBwYXNzZWQgdG8gYW55ICpkYXRlLWZucyogZnVuY3Rpb24gaXMgcHJvY2Vzc2VkIGJ5IGB0b0RhdGVgLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGFyZ3VtZW50IC0gdGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENsb25lIHRoZSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKG5ldyBEYXRlKDIwMTQsIDEsIDExLCAxMSwgMzAsIDMwKSlcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgdGhlIHRpbWVzdGFtcCB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKDEzOTIwOTg0MzAwMDApXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvRGF0ZShhcmd1bWVudCkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGFyZ1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCk7IC8vIENsb25lIHRoZSBkYXRlXG5cbiAgaWYgKGFyZ3VtZW50IGluc3RhbmNlb2YgRGF0ZSB8fCB0eXBlb2YgYXJndW1lbnQgPT09ICdvYmplY3QnICYmIGFyZ1N0ciA9PT0gJ1tvYmplY3QgRGF0ZV0nKSB7XG4gICAgLy8gUHJldmVudCB0aGUgZGF0ZSB0byBsb3NlIHRoZSBtaWxsaXNlY29uZHMgd2hlbiBwYXNzZWQgdG8gbmV3IERhdGUoKSBpbiBJRTEwXG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50LmdldFRpbWUoKSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGFyZ3VtZW50ID09PSAnbnVtYmVyJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IE51bWJlcl0nKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50KTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoKHR5cGVvZiBhcmd1bWVudCA9PT0gJ3N0cmluZycgfHwgYXJnU3RyID09PSAnW29iamVjdCBTdHJpbmddJykgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKFwiU3RhcnRpbmcgd2l0aCB2Mi4wLjAtYmV0YS4xIGRhdGUtZm5zIGRvZXNuJ3QgYWNjZXB0IHN0cmluZ3MgYXMgZGF0ZSBhcmd1bWVudHMuIFBsZWFzZSB1c2UgYHBhcnNlSVNPYCB0byBwYXJzZSBzdHJpbmdzLiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNzdHJpbmctYXJndW1lbnRzXCIpOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuXG4gICAgICBjb25zb2xlLndhcm4obmV3IEVycm9yKCkuc3RhY2spO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG59IiwiaW1wb3J0IHsgZnJvbVVuaXhUaW1lIH0gZnJvbSAnZGF0ZS1mbnMnO1xuLy8gRE9NIGZ1bmN0aW9uc1xuLy8gaGVscGVyIGZ1bmN0aW9ucyB0byBjcmVhdGUgRE9NIGVsZW1lbnQgYW5kIGFkZCBhdHRyaWJ1dGVzXG4vLyBpcyB0aGVyZSBhIG1vcmUgZWZmZWN0aXZlL2VmZmljaWVudCB3YXkgdG8gZG8gdGhpcz8hXG5jb25zdCBzZXRBdHRyaWJ1dGVzID0gKGVsZW1lbnQsIGF0dHJpYnV0ZXMpID0+IHtcbiAgICBPYmplY3QuZW50cmllcyhhdHRyaWJ1dGVzKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoa2V5LCB2YWx1ZSk7XG4gICAgfSlcbn1cbmNvbnN0IGNyZWF0ZUVsZW1lbnQgPSAodHlwZSwgYXR0cmlidXRlcykgPT4ge1xuICAgIGNvbnN0IG5ld0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGAke3R5cGV9YCk7XG4gICAgaWYgKGF0dHJpYnV0ZXMgPT0gbnVsbCkgcmV0dXJuIG5ld0VsZW1lbnQ7XG4gICAgc2V0QXR0cmlidXRlcyhuZXdFbGVtZW50LCBhdHRyaWJ1dGVzKTtcbiAgICByZXR1cm4gbmV3RWxlbWVudDtcbn1cbi8vIHRpbWUgLT4gdHJhbnNmb3JtIHVuaXggdG8gc3RhbmRhcmRcbmNvbnN0IHRpbWUgPSAoaW5wdXQsIG9mZnNldCkgPT4ge1xuICAgIGNvbnN0IGxvY2FsRGF0ZSA9IGZyb21Vbml4VGltZShpbnB1dCk7XG4gICAgY29uc3QgbG9jYWxPZmZzZXQgPSBsb2NhbERhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcbiAgICBsb2NhbERhdGUuc2V0TWludXRlcyhsb2NhbERhdGUuZ2V0TWludXRlcygpICsgbG9jYWxPZmZzZXQpO1xuICAgIGxvY2FsRGF0ZS5zZXRNaW51dGVzKGxvY2FsRGF0ZS5nZXRNaW51dGVzKCkgKyAob2Zmc2V0IC8gNjApKTtcbiAgICByZXR1cm4gbG9jYWxEYXRlO1xufVxuY29uc3QgdGltZUNoZWNrID0gKGlucHV0KSA9PiB7XG4gICAgbGV0IGNoZWNrZWQgPSBpbnB1dDtcbiAgICBpZiAoaW5wdXQgPCAxMCkge1xuICAgICAgICBjaGVja2VkID0gYDAke2lucHV0fWA7XG4gICAgfVxuICAgIHJldHVybiBjaGVja2VkO1xufVxuY29uc3QgY2hlY2tOdW1iZXIgPSAoaW5wdXQpID0+IHtcbiAgICBsZXQgdmFsdWUgPSBpbnB1dDtcbiAgICBpZiAoaW5wdXQgPCAxMCkge1xuICAgICAgdmFsdWUgPSBgMCR7aW5wdXR9YDtcbiAgICB9IFxuICAgIHJldHVybiB2YWx1ZTtcbn1cbmNvbnN0IGhvdXJNaW4gPSAoaW5wdXQsIG9mZnNldCkgPT4ge1xuICAgIGNvbnN0IHZhbHVlID0gdGltZShpbnB1dCwgb2Zmc2V0KTtcbiAgICBjb25zdCBob3VycyA9IGNoZWNrTnVtYmVyKHZhbHVlLmdldEhvdXJzKCkpO1xuICAgIGNvbnN0IG1pbnV0ZXMgPSBjaGVja051bWJlcih2YWx1ZS5nZXRNaW51dGVzKCkpXG4gICAgcmV0dXJuIGAke2hvdXJzfToke21pbnV0ZXN9YDtcbn1cbmNvbnN0IGRhdGVGbiA9IChpbnB1dCwgb2Zmc2V0KSA9PiB7XG4gICAgY29uc3QgdmFsdWUgPSB0aW1lKGlucHV0LCBvZmZzZXQpO1xuICAgIC8vICEhISByZW1vdmVkIGdldERhdGUoKVxuICAgIHJldHVybiB2YWx1ZTtcbn1cbmNvbnN0IGdldFRoZURheSA9IChpbnB1dCkgPT4ge1xuICAgIGxldCB2YWx1ZSA9IGlucHV0O1xuICAgIGlmIChpbnB1dCA+IDYpIHtcbiAgICAgICAgdmFsdWUgPSBpbnB1dCAtIDc7XG4gICAgfVxuICAgIGNvbnN0IGRheXMgPSBbJ1N1bmRheScsICdNb25kYXknLCAnVHVlc2RheScsICdXZWRuZXNkYXknLCAnVGh1cnNkYXknLCAnRnJpZGF5JywgJ1NhdHVyZGF5J107XG4gICAgcmV0dXJuIGRheXNbdmFsdWVdO1xufVxuLy8gdGVtcCAtPiBjb252ZXJ0IEYgdG8gQ1xuLy8gcGxhbm5pbmcgdG8gaGF2ZSBib3RoIGluIGFuIG9iamVjdFxuY29uc3QgdGVtcEZuID0gKGlucHV0KSA9PiB7XG4gICAgY29uc3QgdGVtcE9iaiA9IHtcbiAgICAgICAgZmFyOiBNYXRoLnJvdW5kKE51bWJlcihpbnB1dCkpLFxuICAgICAgICBjZWw6IE1hdGgucm91bmQoKE51bWJlcihpbnB1dCkgLSAzMikgKiAoNS85KSksXG4gICAgfVxuICAgIHJldHVybiB0ZW1wT2JqO1xufVxuLy8gZGlzcGxheSBDIG9yIEY/XG5jb25zdCB3aGF0VGVtcCA9IChib29sZWFuKSA9PiB7XG4gICAgbGV0IHZhbHVlID0gXCJjZWxcIjtcbiAgICBpZiAoYm9vbGVhbiA9PT0gZmFsc2UpIHtcbiAgICAgICAgdmFsdWUgPSBcImZhclwiO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWU7XG59XG4vLyBkZWJ1Zzogc29tZXRpbWVzIGN1cnJlbnQgdGVtcCBpcyBoaWdoZXIgb3IgbG93ZXIgdGhhbiBmb3JlY2FzdCBoaWdoL2xvd1xuLy8gdGhpcyBjaGVjayBmbiBmaXhlcyBpdFxuY29uc3QgY2hlY2tUZW1wID0gKGN1cnJlbnQsIGhpZ2gsIGxvdykgPT4ge1xuICAgIGxldCBoaSA9IGhpZ2g7XG4gICAgbGV0IGxvID0gbG93O1xuICAgIGlmIChjdXJyZW50ID4gaGlnaCkge1xuICAgICAgICBoaSA9IGN1cnJlbnQ7XG4gICAgfVxuICAgIGlmIChjdXJyZW50IDwgbG93KSB7XG4gICAgICAgIGxvID0gbG93O1xuICAgIH1cbiAgICByZXR1cm4gW2hpLCBsb107XG59XG5leHBvcnQgeyBjcmVhdGVFbGVtZW50LCB0ZW1wRm4sIHdoYXRUZW1wLCBjaGVja1RlbXAsIGhvdXJNaW4sIGRhdGVGbiwgZ2V0VGhlRGF5LCB0aW1lLCB0aW1lQ2hlY2sgfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQsIHRpbWUsIHRpbWVDaGVjaywgdGVtcEZuLCB3aGF0VGVtcCwgZ2V0VGhlRGF5IH0gZnJvbSBcIi4vdXRpbGl0eVwiO1xuLy9cbmNvbnN0IGNyZWF0ZSA9ICgoKSA9PiB7XG4gICAgY29uc3QgY29udGFpbmVyID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge2NsYXNzOiBcImZvcmVjYXN0Q29udGFpbmVyXCJ9KTtcbiAgICBcbiAgICBjb25zdCBtYWtlVGl0bGUgPSAob2JqZWN0LCBudW1iZXIpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cobnVtYmVyKTtcbiAgICAgICAgY29uc3QgZGF5ID0gZ2V0VGhlRGF5KG9iamVjdC5kYXkgKyBudW1iZXIpO1xuICAgICAgICBjb25zdCB0aXRsZSA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtjbGFzczogJ2NhcmREYXknfSk7XG4gICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gZGF5O1xuICAgICAgICByZXR1cm4gdGl0bGU7XG4gICAgfVxuICAgIGNvbnN0IG1ha2VUaW1lID0gKG9iamVjdCwgaW5wdXQpID0+IHtcbiAgICAgICAgY29uc3QgZm9yZWNhc3RUaW1lID0gdGltZShpbnB1dC5kdCwgb2JqZWN0LnRpbWV6b25lKTtcbiAgICAgICAgY29uc3QgdGltZURpdiA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtjbGFzczogXCJ0aW1lRGl2XCJ9KTtcbiAgICAgICAgdGltZURpdi50ZXh0Q29udGVudCA9IGAke3RpbWVDaGVjayhmb3JlY2FzdFRpbWUuZ2V0SG91cnMoKSl9MDBgO1xuICAgICAgICByZXR1cm4gdGltZURpdjtcbiAgICB9XG4gICAgY29uc3QgbWFrZVRlbXAgPSAoZm9yZWNhc3RPYmosIGJvb2xlYW4pID0+IHtcbiAgICAgICAgY29uc3QgdGhlVGVtcCA9IHRlbXBGbihmb3JlY2FzdE9iai5tYWluLnRlbXApO1xuICAgICAgICBjb25zdCB0ZW1wVW5pdCA9IHdoYXRUZW1wKGJvb2xlYW4pO1xuICAgICAgICBjb25zdCB0ZW1wQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudCgnZGl2Jywge2NsYXNzOiBcInRlbXBEaXZcIn0pXG4gICAgICAgIGNvbnN0IHRlbXBEaXYgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7aWQ6IFwidGVtcFwiLCBjbGFzczogYCR7dGhlVGVtcC5mYXJ9ICR7dGhlVGVtcC5jZWx9YH0pO1xuICAgICAgICB0ZW1wRGl2LnRleHRDb250ZW50ID0gYCR7dGhlVGVtcFt0ZW1wVW5pdF19YDtcbiAgICAgICAgdGVtcENvbnRhaW5lci5hcHBlbmRDaGlsZCh0ZW1wRGl2KTtcbiAgICAgICAgcmV0dXJuIHRlbXBDb250YWluZXI7XG4gICAgfVxuICAgIGNvbnN0IG1ha2VJY29uID0gKGZvcmVjYXN0T2JqKSA9PiB7XG4gICAgICAgIGNvbnN0IGljb25EaXYgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7Y2xhc3M6IFwiZm9yZWNhc3RJY29uQ29udGFpbmVyXCJ9KTtcbiAgICAgICAgY29uc3QgaWNvbiA9IGNyZWF0ZUVsZW1lbnQoJ2ltZycsIHtjbGFzczogXCJmb3JlY2FzdEljb25cIiwgXCJhcmlhLWxhYmVsXCI6IFwiRm9yZWNhc3QgSWNvblwiLCB0aXRsZTogYCR7Zm9yZWNhc3RPYmoud2VhdGhlclswXS5kZXNjcmlwdGlvbn1gfSk7XG4gICAgICAgIGljb24uc3JjID0gYGh0dHA6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLyR7Zm9yZWNhc3RPYmoud2VhdGhlclswXS5pY29ufUAyeC5wbmdgO1xuICAgICAgICBpY29uLmFsdCA9IGZvcmVjYXN0T2JqLndlYXRoZXJbMF0ubWFpbjtcbiAgICAgICAgaWNvbkRpdi5hcHBlbmRDaGlsZChpY29uKTtcbiAgICAgICAgcmV0dXJuIGljb25EaXY7XG4gICAgfVxuICAgIGNvbnN0IG1ha2VQb3AgPSAoZm9yZWNhc3RPYmopID0+IHtcbiAgICAgICAgY29uc3QgdGhlUG9wID0gZm9yZWNhc3RPYmoucG9wO1xuICAgICAgICBjb25zdCBwb3BEaXYgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7Y2xhc3M6IFwicG9wRGl2XCJ9KTtcbiAgICAgICAgcG9wRGl2LnRleHRDb250ZW50ID0gYCR7TWF0aC5yb3VuZCh0aGVQb3AgKiAxMDApfSVgO1xuICAgICAgICByZXR1cm4gcG9wRGl2O1xuICAgIH1cbiAgICBjb25zdCBtYWtlU3BhY2VyID0gKHBhcmVudCkgPT4ge1xuICAgICAgICBjb25zdCBzcGFjZXJEaXYgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7Y2xhc3M6IGBzcGFjZXJEaXYwYH0pO1xuICAgICAgICBwYXJlbnQuaW5zZXJ0QmVmb3JlKHNwYWNlckRpdiwgcGFyZW50LmNoaWxkcmVuWzFdKTtcbiAgICAgICAgY29uc3QgdmFsdWUgPSAxMiAtIHBhcmVudC5jaGlsZHJlbi5sZW5ndGg7XG4gICAgICAgIHNwYWNlckRpdi5zdHlsZS5ncmlkUm93ID0gYDIvJHt2YWx1ZX1gO1xuICAgIH1cbiAgICBjb25zdCBtYWtlQ2FyZCA9IChvYmplY3QsIGNvbGxlY3RpdmUsIGNhcmQsIGJvb2xlYW4pID0+IHtcbiAgICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGNvbGxlY3RpdmUpO1xuICAgICAgICBrZXlzLmZvckVhY2goaW5kZXggPT4ge1xuICAgICAgICAgICAgY29uc3QgYmxvY2sgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7Y2xhc3M6IFwiZm9yZWNhc3RCbG9ja1wifSk7XG4gICAgICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGJsb2NrKTtcbiAgICAgICAgICAgIGJsb2NrLmFwcGVuZENoaWxkKG1ha2VUaW1lKG9iamVjdCwgY29sbGVjdGl2ZVtpbmRleF0pKTtcbiAgICAgICAgICAgIGJsb2NrLmFwcGVuZENoaWxkKG1ha2VUZW1wKGNvbGxlY3RpdmVbaW5kZXhdLCBib29sZWFuKSk7XG4gICAgICAgICAgICBibG9jay5hcHBlbmRDaGlsZChtYWtlSWNvbihjb2xsZWN0aXZlW2luZGV4XSkpO1xuICAgICAgICAgICAgYmxvY2suYXBwZW5kQ2hpbGQobWFrZVBvcChjb2xsZWN0aXZlW2luZGV4XSkpO1xuICAgICAgICB9KVxuICAgIH1cbiAgICBjb25zdCBmb3JlY2FzdCA9IChpbnB1dCwgb2JqZWN0LCBib29sZWFuKSA9PiB7XG4gICAgICAgIGNvbnN0IGxlbmd0aCA9IE9iamVjdC5rZXlzKGlucHV0KS5sZW5ndGg7XG4gICAgICAgIGNvbnN0IGFycmF5ID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIGFycmF5W2ldID0gaW5wdXRbaV07XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICBhcnJheS5mb3JFYWNoKGluZGV4ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNhcmQgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7Y2xhc3M6IGBjYXJkJHtpfWB9KTtcbiAgICAgICAgICAgIG1ha2VDYXJkKG9iamVjdCwgaW5kZXgsIGNhcmQsIGJvb2xlYW4pO1xuICAgICAgICAgICAgY2FyZC5wcmVwZW5kKG1ha2VUaXRsZShvYmplY3QsIGkpKTtcbiAgICAgICAgICAgIGlmIChpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgY2FyZC5jaGlsZHJlblswXS50ZXh0Q29udGVudCA9ICdUb2RheSc7XG4gICAgICAgICAgICAgICAgaWYgKGNhcmQuY2hpbGRyZW4ubGVuZ3RoIDwgOSkge1xuICAgICAgICAgICAgICAgICAgICBtYWtlU3BhY2VyKGNhcmQpO1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25zdCBzcGFjZXJEaXYgPSBjcmVhdGVFbGVtZW50KCdkaXYnLCB7Y2xhc3M6IGBzcGFjZXJEaXYwYH0pO1xuICAgICAgICAgICAgICAgICAgICAvLyBjYXJkLmluc2VydEJlZm9yZShzcGFjZXJEaXYsIGNhcmQuY2hpbGRyZW5bMV0pO1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25zdCB2YWx1ZSA9IDEyIC0gY2FyZC5jaGlsZHJlbi5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgIC8vIHNwYWNlckRpdi5zdHlsZS5ncmlkUm93ID0gYDIvJHt2YWx1ZX1gO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJkKTtcbiAgICAgICAgICAgIGkgKz0gMTtcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICB9XG4gICAgcmV0dXJuIHsgZm9yZWNhc3QgfVxufSkoKTtcbmNvbnN0IGZpbGxGb3JlY2FzdENvbnRhaW5lciA9IChpbnB1dCwgb2JqZWN0LCBib29sZWFuKSA9PiB7XG4gICAgY29uc29sZS5sb2coaW5wdXQpO1xuICAgIGNvbnNvbGUubG9nKG9iamVjdCk7XG4gICAgY29uc3QgZm9yZWNhc3REaXYgPSBjcmVhdGUuZm9yZWNhc3QoaW5wdXQsIG9iamVjdCwgYm9vbGVhbik7XG4gICAgcmV0dXJuIGZvcmVjYXN0RGl2O1xufVxuZXhwb3J0IGRlZmF1bHQgZmlsbEZvcmVjYXN0Q29udGFpbmVyOyJdLCJuYW1lcyI6WyJyZXF1aXJlZEFyZ3MiLCJyZXF1aXJlZCIsImFyZ3MiLCJsZW5ndGgiLCJUeXBlRXJyb3IiLCJ0b0ludGVnZXIiLCJkaXJ0eU51bWJlciIsIk5hTiIsIm51bWJlciIsIk51bWJlciIsImlzTmFOIiwiTWF0aCIsImNlaWwiLCJmbG9vciIsImZyb21Vbml4VGltZSIsImRpcnR5VW5peFRpbWUiLCJhcmd1bWVudHMiLCJ1bml4VGltZSIsInRvRGF0ZSIsImFyZ3VtZW50IiwiYXJnU3RyIiwiT2JqZWN0IiwicHJvdG90eXBlIiwidG9TdHJpbmciLCJjYWxsIiwiRGF0ZSIsImdldFRpbWUiLCJjb25zb2xlIiwid2FybiIsIkVycm9yIiwic3RhY2siLCJjcmVhdGVFbGVtZW50IiwidHlwZSIsImF0dHJpYnV0ZXMiLCJuZXdFbGVtZW50IiwiZG9jdW1lbnQiLCJlbGVtZW50IiwiZW50cmllcyIsImZvckVhY2giLCJrZXkiLCJ2YWx1ZSIsInNldEF0dHJpYnV0ZSIsInNldEF0dHJpYnV0ZXMiLCJ0aW1lIiwiaW5wdXQiLCJvZmZzZXQiLCJsb2NhbERhdGUiLCJsb2NhbE9mZnNldCIsImdldFRpbWV6b25lT2Zmc2V0Iiwic2V0TWludXRlcyIsImdldE1pbnV0ZXMiLCJ0aW1lQ2hlY2siLCJjaGVja2VkIiwiZ2V0VGhlRGF5IiwidGVtcEZuIiwiZmFyIiwicm91bmQiLCJjZWwiLCJ3aGF0VGVtcCIsImJvb2xlYW4iLCJfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18iLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwibW9kdWxlSWQiLCJjYWNoZWRNb2R1bGUiLCJ1bmRlZmluZWQiLCJleHBvcnRzIiwibW9kdWxlIiwiX193ZWJwYWNrX21vZHVsZXNfXyIsImQiLCJkZWZpbml0aW9uIiwibyIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImdldCIsIm9iaiIsInByb3AiLCJoYXNPd25Qcm9wZXJ0eSIsImNsYXNzIl0sInNvdXJjZVJvb3QiOiIifQ==