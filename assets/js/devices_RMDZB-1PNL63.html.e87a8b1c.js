"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[86418],{18801:(e,t,o)=>{o.r(t),o.d(t,{comp:()=>i,data:()=>d});var r=o(6254);const a={},i=(0,o(32991).A)(a,[["render",function(e,t){const o=(0,r.g2)("RouteLink");return(0,r.uX)(),(0,r.CE)("div",null,[t[9]||(t[9]=(0,r.Lk)("h1",{id:"tnce-rmdzb-1pnl63",tabindex:"-1"},[(0,r.Lk)("a",{class:"header-anchor",href:"#tnce-rmdzb-1pnl63"},[(0,r.Lk)("span",null,"TNCE RMDZB-1PNL63")])],-1)),(0,r.Lk)("table",null,[t[7]||(t[7]=(0,r.Lk)("thead",null,[(0,r.Lk)("tr",null,[(0,r.Lk)("th"),(0,r.Lk)("th")])],-1)),(0,r.Lk)("tbody",null,[t[2]||(t[2]=(0,r.Lk)("tr",null,[(0,r.Lk)("td",null,"Model"),(0,r.Lk)("td",null,"RMDZB-1PNL63")],-1)),(0,r.Lk)("tr",null,[t[1]||(t[1]=(0,r.Lk)("td",null,"Vendor",-1)),(0,r.Lk)("td",null,[(0,r.bF)(o,{to:"/supported-devices/#v=TNCE"},{default:(0,r.k6)((()=>t[0]||(t[0]=[(0,r.eW)("TNCE")]))),_:1})])]),t[3]||(t[3]=(0,r.Lk)("tr",null,[(0,r.Lk)("td",null,"Description"),(0,r.Lk)("td",null,"Zigbee DIN single phase energy meter")],-1)),t[4]||(t[4]=(0,r.Lk)("tr",null,[(0,r.Lk)("td",null,"Exposes"),(0,r.Lk)("td",null,"switch (state), energy, fault, voltage_a, power_a, current_a, temperature, over_current_breaker, over_current_threshold, over_voltage_breaker, over_voltage_threshold, under_voltage_breaker, under_voltage_threshold, high_temperature_breaker, high_temperature_threshold")],-1)),t[5]||(t[5]=(0,r.Lk)("tr",null,[(0,r.Lk)("td",null,"Picture"),(0,r.Lk)("td",null,[(0,r.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/RMDZB-1PNL63.png",alt:"TNCE RMDZB-1PNL63"})])],-1)),t[6]||(t[6]=(0,r.Lk)("tr",null,[(0,r.Lk)("td",null,"White-label"),(0,r.Lk)("td",null,"TNCE RMDZB-1PNL63")],-1))])]),t[10]||(t[10]=(0,r.Lk)("h2",{id:"options",tabindex:"-1"},[(0,r.Lk)("a",{class:"header-anchor",href:"#options"},[(0,r.Lk)("span",null,"Options")])],-1)),(0,r.Lk)("p",null,[(0,r.Lk)("em",null,[(0,r.bF)(o,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,r.k6)((()=>t[8]||(t[8]=[(0,r.eW)("How to use device type specific configuration")]))),_:1})])]),t[11]||(t[11]=(0,r.Fv)('<ul><li><p><code>energy_calibration</code>: Calibrates the energy value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>energy_precision</code>: Number of digits after decimal point for energy, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>temperature_calibration</code>: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>temperature_precision</code>: Number of digits after decimal point for temperature, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="switch" tabindex="-1"><a class="header-anchor" href="#switch"><span>Switch</span></a></h3><p>The current state of this switch is in the published state under the <code>state</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value.</p><h3 id="energy-numeric" tabindex="-1"><a class="header-anchor" href="#energy-numeric"><span>Energy (numeric)</span></a></h3><p>Sum of consumed energy. Value can be found in the published state on the <code>energy</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>kWh</code>.</p><h3 id="fault-enum" tabindex="-1"><a class="header-anchor" href="#fault-enum"><span>Fault (enum)</span></a></h3><p>Fault status of the device (clear = nothing). Value can be found in the published state on the <code>fault</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>clear</code>, <code>short_circuit_alarm</code>, <code>surge_alarm</code>, <code>overload_alarm</code>, <code>leakagecurr_alarm</code>, <code>temp_dif_fault</code>, <code>fire_alarm</code>, <code>high_power_alarm</code>, <code>self_test_alarm</code>, <code>ov_cr</code>, <code>unbalance_alarm</code>, <code>ov_vol</code>, <code>undervoltage_alarm</code>, <code>miss_phase_alarm</code>, <code>outage_alarm</code>, <code>magnetism_alarm</code>, <code>credit_alarm</code>, <code>no_balance_alarm</code>.</p><h3 id="voltage-a-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-a-numeric"><span>Voltage a (numeric)</span></a></h3><p>Measured electrical potential value (phase A). Value can be found in the published state on the <code>voltage_a</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>V</code>.</p><h3 id="power-a-numeric" tabindex="-1"><a class="header-anchor" href="#power-a-numeric"><span>Power a (numeric)</span></a></h3><p>Instantaneous measured power (phase A). Value can be found in the published state on the <code>power_a</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>W</code>.</p><h3 id="current-a-numeric" tabindex="-1"><a class="header-anchor" href="#current-a-numeric"><span>Current a (numeric)</span></a></h3><p>Instantaneous measured electrical current (phase A). Value can be found in the published state on the <code>current_a</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>A</code>.</p><h3 id="temperature-numeric" tabindex="-1"><a class="header-anchor" href="#temperature-numeric"><span>Temperature (numeric)</span></a></h3><p>Measured temperature value. Value can be found in the published state on the <code>temperature</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>°C</code>.</p><h3 id="over-current-breaker-binary" tabindex="-1"><a class="header-anchor" href="#over-current-breaker-binary"><span>Over current breaker (binary)</span></a></h3><p>OFF - alarm only, ON - relay will turn off when threshold reached. Value can be found in the published state on the <code>over_current_breaker</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;over_current_breaker&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> over current breaker is ON, if <code>OFF</code> OFF.</p><h3 id="over-current-threshold-numeric" tabindex="-1"><a class="header-anchor" href="#over-current-threshold-numeric"><span>Over current threshold (numeric)</span></a></h3><p>Setup the value on the device. Value can be found in the published state on the <code>over_current_threshold</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;over_current_threshold&quot;: NEW_VALUE}</code>. The minimal value is <code>1</code> and the maximum value is <code>63</code>. The unit of this value is <code>A</code>.</p><h3 id="over-voltage-breaker-binary" tabindex="-1"><a class="header-anchor" href="#over-voltage-breaker-binary"><span>Over voltage breaker (binary)</span></a></h3><p>OFF - alarm only, ON - relay will turn off when threshold reached. Value can be found in the published state on the <code>over_voltage_breaker</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;over_voltage_breaker&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> over voltage breaker is ON, if <code>OFF</code> OFF.</p><h3 id="over-voltage-threshold-numeric" tabindex="-1"><a class="header-anchor" href="#over-voltage-threshold-numeric"><span>Over voltage threshold (numeric)</span></a></h3><p>Setup value on the device. Value can be found in the published state on the <code>over_voltage_threshold</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;over_voltage_threshold&quot;: NEW_VALUE}</code>. The minimal value is <code>250</code> and the maximum value is <code>300</code>. The unit of this value is <code>V</code>.</p><h3 id="under-voltage-breaker-binary" tabindex="-1"><a class="header-anchor" href="#under-voltage-breaker-binary"><span>Under voltage breaker (binary)</span></a></h3><p>OFF - alarm only, ON - relay will turn off when threshold reached. Value can be found in the published state on the <code>under_voltage_breaker</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;under_voltage_breaker&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> under voltage breaker is ON, if <code>OFF</code> OFF.</p><h3 id="under-voltage-threshold-numeric" tabindex="-1"><a class="header-anchor" href="#under-voltage-threshold-numeric"><span>Under voltage threshold (numeric)</span></a></h3><p>Setup value on the device. Value can be found in the published state on the <code>under_voltage_threshold</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;under_voltage_threshold&quot;: NEW_VALUE}</code>. The minimal value is <code>150</code> and the maximum value is <code>200</code>. The unit of this value is <code>V</code>.</p><h3 id="high-temperature-breaker-binary" tabindex="-1"><a class="header-anchor" href="#high-temperature-breaker-binary"><span>High temperature breaker (binary)</span></a></h3><p>OFF - alarm only, ON - relay will turn off when threshold reached. Value can be found in the published state on the <code>high_temperature_breaker</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;high_temperature_breaker&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> high temperature breaker is ON, if <code>OFF</code> OFF.</p><h3 id="high-temperature-threshold-numeric" tabindex="-1"><a class="header-anchor" href="#high-temperature-threshold-numeric"><span>High temperature threshold (numeric)</span></a></h3><p>Setup value on the device. Value can be found in the published state on the <code>high_temperature_threshold</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;high_temperature_threshold&quot;: NEW_VALUE}</code>. The minimal value is <code>40</code> and the maximum value is <code>100</code>. The unit of this value is <code>°C</code>.</p>',32))])}]]),d=JSON.parse('{"path":"/devices/RMDZB-1PNL63.html","title":"TNCE RMDZB-1PNL63 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"TNCE RMDZB-1PNL63 control via MQTT","description":"Integrate your TNCE RMDZB-1PNL63 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2024-10-31T20:34:53.000Z"},"headers":[{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Switch","slug":"switch","link":"#switch","children":[]},{"level":3,"title":"Energy (numeric)","slug":"energy-numeric","link":"#energy-numeric","children":[]},{"level":3,"title":"Fault (enum)","slug":"fault-enum","link":"#fault-enum","children":[]},{"level":3,"title":"Voltage a (numeric)","slug":"voltage-a-numeric","link":"#voltage-a-numeric","children":[]},{"level":3,"title":"Power a (numeric)","slug":"power-a-numeric","link":"#power-a-numeric","children":[]},{"level":3,"title":"Current a (numeric)","slug":"current-a-numeric","link":"#current-a-numeric","children":[]},{"level":3,"title":"Temperature (numeric)","slug":"temperature-numeric","link":"#temperature-numeric","children":[]},{"level":3,"title":"Over current breaker (binary)","slug":"over-current-breaker-binary","link":"#over-current-breaker-binary","children":[]},{"level":3,"title":"Over current threshold (numeric)","slug":"over-current-threshold-numeric","link":"#over-current-threshold-numeric","children":[]},{"level":3,"title":"Over voltage breaker (binary)","slug":"over-voltage-breaker-binary","link":"#over-voltage-breaker-binary","children":[]},{"level":3,"title":"Over voltage threshold (numeric)","slug":"over-voltage-threshold-numeric","link":"#over-voltage-threshold-numeric","children":[]},{"level":3,"title":"Under voltage breaker (binary)","slug":"under-voltage-breaker-binary","link":"#under-voltage-breaker-binary","children":[]},{"level":3,"title":"Under voltage threshold (numeric)","slug":"under-voltage-threshold-numeric","link":"#under-voltage-threshold-numeric","children":[]},{"level":3,"title":"High temperature breaker (binary)","slug":"high-temperature-breaker-binary","link":"#high-temperature-breaker-binary","children":[]},{"level":3,"title":"High temperature threshold (numeric)","slug":"high-temperature-threshold-numeric","link":"#high-temperature-threshold-numeric","children":[]}]}],"git":{"updatedTime":1738788533000},"filePathRelative":"devices/RMDZB-1PNL63.md"}')}}]);