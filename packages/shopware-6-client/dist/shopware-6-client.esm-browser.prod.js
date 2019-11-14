import t from"axios";const a={endpoint:"https://shopware-2.vuestorefront.io/sales-channel-api/v1",accessToken:"SWSCBVBBZET1RTFIYWY4YVLICA",contextToken:"",defaultPaginationLimit:10};let n={};const e=function(t={}){n=Object.assign(n,a,t)};e();const c=function(t){n=Object.assign(n,t)},o=n,i=t.create({});function s(){i.defaults.baseURL=o.endpoint,i.defaults.headers.common["sw-access-key"]=o.accessToken,o.contextToken?i.defaults.headers.common["sw-context-token"]=o.contextToken:delete i.defaults.headers.common["sw-context-token"]}s();const r=()=>"/category",u=t=>`/category/${t}`,d=t=>`/product/${t}`,f=t=>t?`/customer/address/${t}`:"/customer/address",p=(t,a)=>`/customer/address/${a}/default-${t}`,y=t=>p("billing",t),l=t=>p("shipping",t),w=()=>"/customer",g=()=>"/customer/login",m=()=>"/customer/logout",h=()=>"/customer/email",T=()=>"/customer/password",E=()=>"/checkout/cart",k=t=>`/checkout/cart/product/${t}`,x=t=>`/checkout/cart/line-item/${t}`,I=t=>`/checkout/cart/code/${t}`,F=()=>"/context",N=()=>"/currency",V=()=>"/language",D=()=>"/country",O=()=>"/payment-method",R=()=>"/shipping-method",$=()=>"/vsf/page";var Y;!function(t){t[t.ONE=1]="ONE",t[t.FIVE=5]="FIVE",t[t.TEN=10]="TEN",t[t.TWENTY_FIVE=25]="TWENTY_FIVE",t[t.FIFTY=50]="FIFTY",t[t.SEVENTY_FIVE=75]="SEVENTY_FIVE",t[t.HUNDRED=100]="HUNDRED",t[t.FIVE_HUNDRED=500]="FIVE_HUNDRED"}(Y||(Y={}));const U=t=>{let a={};if(!t)return a;const{filters:n,sort:e,pagination:c,configuration:i}=t;if(c){const{limit:t,page:n}=c;t&&Object.values(Y).includes(t)&&(a.limit=t),n&&(a.page=n,a.limit||(a.limit=o.defaultPaginationLimit))}if(e){let t=e.desc?"-":"";a.sort=`${t}${e.field}`}return n&&n.length&&(a.filter=n),i&&(a.associations=function t(a=[]){if(!a||!a.length)return;let n={};return a.forEach(a=>{n[a.name]={associations:t(a.associations)}}),n}(i.associations)),a};async function v(t){return(await i.post(r(),U(t))).data}async function C(t){return(await i.get(u(t))).data.data}const _=async function(){return(await i.post("/search-ids/product")).data},b=async function(t){return(await i.post("/product",U(t))).data};async function P(t,a=null){return(await i.get(d(t),{params:a})).data.data}async function S(t){return(await i.post(w(),t)).data}async function H(t){const a=(await i.post(g(),t)).data["sw-context-token"];return mt({contextToken:a}),{contextToken:a}}async function L(){await i.post(m()),mt({contextToken:""})}async function M(){return(await i.get(w())).data.data}async function W(){return(await i.get(f())).data.data}async function j(t){return(await i.get(f(t))).data.data}async function q(t){return(await i.post(f(),t)).data}async function B(t){await i.delete(f(t))}async function A(t){return(await i.patch(y(t))).data}async function Z(t){return(await i.patch(l(t))).data}async function z(t){await i.patch(h(),t)}async function G(t){await i.patch(T(),t)}async function J(t){await i.patch(w(),t)}async function K(t){const a=(await i.patch(F(),t)).data["sw-context-token"];return mt({contextToken:a}),{contextToken:a}}async function Q(){return(await i.get(N())).data}async function X(t){let a={currencyId:t};return await K(a)}async function tt(){return(await i.get(V())).data}async function at(t){let a={languageId:t};return await K(a)}async function nt(){return(await i.get(D())).data}async function et(){return(await i.get(O())).data}async function ct(t){let a={paymentMethodId:t};return await K(a)}async function ot(){return(await i.get(R())).data}async function it(t){let a={shippingMethodId:t};return await K(a)}var st;async function rt(){let t=(await i.post(E())).data["sw-context-token"];return mt({contextToken:t}),{contextToken:t}}async function ut(){return(await i.get(E())).data}async function dt(t,a){return(await i.post(k(t),{quantity:a})).data}async function ft(t,a){let n={type:st.PRODUCT,quantity:a};return(await i.post(x(t),n)).data}async function pt(t,a){let n={quantity:a};return(await i.patch(x(t),n)).data}async function yt(t){return(await i.delete(x(t))).data}async function lt(t){return(await i.post(I(t))).data}async function wt(t,a){return(await i.post($(),{path:t})).data}function gt(t={}){e(t),s()}function mt(t={}){c(t),s()}!function(t){t.PRODUCT="product",t.CREDIT="credit",t.CUSTOM="custom",t.PROMOTION="promotion"}(st||(st={}));export{ft as addCartItemQuantity,dt as addProductToCart,lt as addPromotionCode,pt as changeCartItemQuantity,rt as clearCart,o as config,q as createCustomerAddress,B as deleteCustomerAddress,nt as getAvailableCountries,Q as getAvailableCurrencies,tt as getAvailableLanguages,et as getAvailablePaymentMethods,ot as getAvailableShippingMethods,ut as getCart,v as getCategories,C as getCategory,M as getCustomer,j as getCustomerAddress,W as getCustomerAddresses,wt as getPage,P as getProduct,b as getProducts,_ as getProductsIds,H as login,L as logout,S as register,yt as removeCartItem,X as setCurrentCurrency,at as setCurrentLanguage,ct as setCurrentPaymentMethod,it as setCurrentShippingMethod,A as setDefaultCustomerBillingAddress,Z as setDefaultCustomerShippingAddress,gt as setup,mt as update,z as updateEmail,G as updatePassword,J as updateProfile};