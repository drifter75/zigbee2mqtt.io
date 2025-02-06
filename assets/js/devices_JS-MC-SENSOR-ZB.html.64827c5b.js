"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[11276],{20126:(e,i,t)=>{t.r(i),t.d(i,{comp:()=>l,data:()=>o});var n=t(6254);const a={},l=(0,t(32991).A)(a,[["render",function(e,i){const t=(0,n.g2)("RouteLink");return(0,n.uX)(),(0,n.CE)("div",null,[i[8]||(i[8]=(0,n.Lk)("h1",{id:"javis-js-mc-sensor-zb",tabindex:"-1"},[(0,n.Lk)("a",{class:"header-anchor",href:"#javis-js-mc-sensor-zb"},[(0,n.Lk)("span",null,"JAVIS JS-MC-SENSOR-ZB")])],-1)),(0,n.Lk)("table",null,[i[6]||(i[6]=(0,n.Lk)("thead",null,[(0,n.Lk)("tr",null,[(0,n.Lk)("th"),(0,n.Lk)("th")])],-1)),(0,n.Lk)("tbody",null,[i[2]||(i[2]=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Model"),(0,n.Lk)("td",null,"JS-MC-SENSOR-ZB")],-1)),(0,n.Lk)("tr",null,[i[1]||(i[1]=(0,n.Lk)("td",null,"Vendor",-1)),(0,n.Lk)("td",null,[(0,n.bF)(t,{to:"/supported-devices/#v=JAVIS"},{default:(0,n.k6)((()=>i[0]||(i[0]=[(0,n.eW)("JAVIS")]))),_:1})])]),i[3]||(i[3]=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Description"),(0,n.Lk)("td",null,"Microwave sensor")],-1)),i[4]||(i[4]=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Exposes"),(0,n.Lk)("td",null,"occupancy, illuminance, led_enable, keep_time, sensitivity, illuminance_calibration")],-1)),i[5]||(i[5]=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Picture"),(0,n.Lk)("td",null,[(0,n.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/JS-MC-SENSOR-ZB.png",alt:"JAVIS JS-MC-SENSOR-ZB"})])],-1))])]),i[9]||(i[9]=(0,n.Lk)("h2",{id:"options",tabindex:"-1"},[(0,n.Lk)("a",{class:"header-anchor",href:"#options"},[(0,n.Lk)("span",null,"Options")])],-1)),(0,n.Lk)("p",null,[(0,n.Lk)("em",null,[(0,n.bF)(t,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,n.k6)((()=>i[7]||(i[7]=[(0,n.eW)("How to use device type specific configuration")]))),_:1})])]),i[10]||(i[10]=(0,n.Fv)('<ul><li><code>illuminance_calibration</code>: Calibrates the illuminance value (percentual offset), takes into effect on next report of device. The value must be a number.</li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="occupancy-binary" tabindex="-1"><a class="header-anchor" href="#occupancy-binary"><span>Occupancy (binary)</span></a></h3><p>Indicates whether the device detected occupancy. Value can be found in the published state on the <code>occupancy</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> occupancy is ON, if <code>false</code> OFF.</p><h3 id="illuminance-numeric" tabindex="-1"><a class="header-anchor" href="#illuminance-numeric"><span>Illuminance (numeric)</span></a></h3><p>Measured illuminance. Value can be found in the published state on the <code>illuminance</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>lx</code>.</p><h3 id="led-enable-binary" tabindex="-1"><a class="header-anchor" href="#led-enable-binary"><span>Led enable (binary)</span></a></h3><p>Enabled LED. Value can be found in the published state on the <code>led_enable</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;led_enable&quot;: NEW_VALUE}</code>. If value equals <code>true</code> led enable is ON, if <code>false</code> OFF.</p><h3 id="keep-time-enum" tabindex="-1"><a class="header-anchor" href="#keep-time-enum"><span>Keep time (enum)</span></a></h3><p>PIR keep time 0:5s|1:30s|2:60s|3:180s|4:300s|5:600s|6:1200s|7:1800s. Value can be found in the published state on the <code>keep_time</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;keep_time&quot;: NEW_VALUE}</code>. The possible values are: <code>0</code>, <code>1</code>, <code>2</code>, <code>3</code>, <code>4</code>, <code>5</code>, <code>6</code>, <code>7</code>.</p><h3 id="sensitivity-enum" tabindex="-1"><a class="header-anchor" href="#sensitivity-enum"><span>Sensitivity (enum)</span></a></h3><p>Value can be found in the published state on the <code>sensitivity</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;sensitivity&quot;: NEW_VALUE}</code>. The possible values are: <code>25</code>, <code>50</code>, <code>75</code>, <code>100</code>.</p><h3 id="illuminance-calibration-numeric" tabindex="-1"><a class="header-anchor" href="#illuminance-calibration-numeric"><span>Illuminance calibration (numeric)</span></a></h3><p>Illuminance calibration. Value can be found in the published state on the <code>illuminance_calibration</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;illuminance_calibration&quot;: NEW_VALUE}</code>. The minimal value is <code>-10000</code> and the maximum value is <code>10000</code>.</p>',14))])}]]),o=JSON.parse('{"path":"/devices/JS-MC-SENSOR-ZB.html","title":"JAVIS JS-MC-SENSOR-ZB control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"JAVIS JS-MC-SENSOR-ZB control via MQTT","description":"Integrate your JAVIS JS-MC-SENSOR-ZB via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2021-11-30T20:10:17.000Z"},"headers":[{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Occupancy (binary)","slug":"occupancy-binary","link":"#occupancy-binary","children":[]},{"level":3,"title":"Illuminance (numeric)","slug":"illuminance-numeric","link":"#illuminance-numeric","children":[]},{"level":3,"title":"Led enable (binary)","slug":"led-enable-binary","link":"#led-enable-binary","children":[]},{"level":3,"title":"Keep time (enum)","slug":"keep-time-enum","link":"#keep-time-enum","children":[]},{"level":3,"title":"Sensitivity (enum)","slug":"sensitivity-enum","link":"#sensitivity-enum","children":[]},{"level":3,"title":"Illuminance calibration (numeric)","slug":"illuminance-calibration-numeric","link":"#illuminance-calibration-numeric","children":[]}]}],"git":{"updatedTime":1738788533000},"filePathRelative":"devices/JS-MC-SENSOR-ZB.md"}')}}]);