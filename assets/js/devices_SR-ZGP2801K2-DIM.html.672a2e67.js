"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[88602],{25109:(e,t,n)=>{n.r(t),n.d(t,{comp:()=>s,data:()=>r});var i=n(6254);const o={},s=(0,n(89596).A)(o,[["render",function(e,t){const n=(0,i.g2)("RouteLink");return(0,i.uX)(),(0,i.CE)("div",null,[t[7]||(t[7]=(0,i.Lk)("h1",{id:"sunricher-sr-zgp2801k2-dim",tabindex:"-1"},[(0,i.Lk)("a",{class:"header-anchor",href:"#sunricher-sr-zgp2801k2-dim"},[(0,i.Lk)("span",null,"Sunricher SR-ZGP2801K2-DIM")])],-1)),(0,i.Lk)("table",null,[t[6]||(t[6]=(0,i.Lk)("thead",null,[(0,i.Lk)("tr",null,[(0,i.Lk)("th"),(0,i.Lk)("th")])],-1)),(0,i.Lk)("tbody",null,[t[2]||(t[2]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Model"),(0,i.Lk)("td",null,"SR-ZGP2801K2-DIM")],-1)),(0,i.Lk)("tr",null,[t[1]||(t[1]=(0,i.Lk)("td",null,"Vendor",-1)),(0,i.Lk)("td",null,[(0,i.bF)(n,{to:"/supported-devices/#v=Sunricher"},{default:(0,i.k6)((()=>t[0]||(t[0]=[(0,i.eW)("Sunricher")]))),_:1})])]),t[3]||(t[3]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Description"),(0,i.Lk)("td",null,"Pushbutton transmitter module")],-1)),t[4]||(t[4]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Exposes"),(0,i.Lk)("td",null,"action, linkquality")],-1)),t[5]||(t[5]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Picture"),(0,i.Lk)("td",null,[(0,i.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/SR-ZGP2801K2-DIM.png",alt:"Sunricher SR-ZGP2801K2-DIM"})])],-1))])]),t[8]||(t[8]=(0,i.Fv)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h2><h3 id="green-power" tabindex="-1"><a class="header-anchor" href="#green-power"><span>Green Power</span></a></h3><p>This is a Zigbee Green Power device which allows it to be very energy efficient. Messages from Green Power devices cannot be &quot;understood&quot; by normal Zigbee devices, therefore they need to be &quot;translated&quot; first. Not all Zigbee devices can do this translation, currently the only devices known to do this are Philips Hue devices. This means that the Green Power device has to be in range of a Philips Hue device in order to use it.</p><p>Green Power devices don&#39;t support binding and are not included in network scans.</p><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing"><span>Pairing</span></a></h3><p>This device requires your Zigbee network to run on channel 11-26.</p><p>Pairing GP Switch to a Compatible Zigbee Light Device: Step 1: activate learning to GP switch mode of the compatible light device (generally our light devices will enter the mode by short pressing “prog.” or “reset” button 4 times, or by resetting power 4 times), please refer to the manual of corresponding light device. Step 2: put the GP switch into learning mode. To enter into learning mode, start by selecting one button on the switch. (Use the same button for the entire sequence, pressing any other button will exit the learning mode.) Next, execute the following sequence:</p><ol><li>Press and hold the selected button for over 7 seconds, and then release it.</li><li>Short press the button once, and then release it.</li><li>Press and hold the button again for over 7 seconds, and then release it The switch has now entered learning mode. Wait for approximate 1 second to check whether there is indication on the light device for successful pairing, generally our light device will blink twice to indicate successful pairing. Exit learning mode on the switch by pressing any other button on the switch after pairing successfully. Just ignore step 3. If there is no indication, please continue executing step 3. Step 3: Cycle through the sixteen Zigbee channels A radio signal needs be sent from the switch to the compatible light device on the correct Zigbee channel, the light device uses one of the sixteen possible channels, automatically set the device. Using the switch, a signal will be sent on each channel until the channel used by the light device is found. Upon entering learning mode, the signal will be sent by the switch on default channel 11.</li></ol><p>To change the switch’s channel, short press the selected button to move from default channel 11 to the next one. For each such button press, the switch transmits on the next channel. After each such button press, please wait for approximate 1 second to check whether there is indication on the light device for successful pairing. If pairing successfully, please exit learning mode on the switch. If channel 26 has been reached, but there is still no indication, it might because the switch has not entered learning mode yet since the very start. We have to repeat the step 2 to put it into learning mode.</p><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum"><span>Action (enum)</span></a></h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>press_on</code>, <code>press_off</code>, <code>hold_on</code>, <code>hold_off</code>, <code>release</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric"><span>Linkquality (numeric)</span></a></h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',14))])}]]),r=JSON.parse('{"path":"/devices/SR-ZGP2801K2-DIM.html","title":"Sunricher SR-ZGP2801K2-DIM control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Sunricher SR-ZGP2801K2-DIM control via MQTT","description":"Integrate your Sunricher SR-ZGP2801K2-DIM via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2021-12-03T18:14:38.000Z"},"headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Green Power","slug":"green-power","link":"#green-power","children":[]},{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]}]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Action (enum)","slug":"action-enum","link":"#action-enum","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1733772810000},"filePathRelative":"devices/SR-ZGP2801K2-DIM.md"}')}}]);