(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{414:function(t,s,a){"use strict";a.r(s);var n=a(26),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"websocket-行情推送"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#websocket-行情推送"}},[t._v("#")]),t._v(" Websocket 行情推送")]),t._v(" "),a("h2",{attrs:{id:"_1-订阅合约交易深度"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-订阅合约交易深度"}},[t._v("#")]),t._v(" 1. 订阅合约交易深度")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("订阅合约对盘口深度的数据的推送，此主题发送最新市场深度快照。快照频率为每秒1次。\n")])])]),a("p",[a("strong",[t._v("订阅Types")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("dataType 为 market.depth.$Symbol.$Step.$Level，比如market.depth.BTC-USDT.step0.level5\n")])])]),a("p",[a("strong",[t._v("订阅参数")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("参数名")]),t._v(" "),a("th",[t._v("参数Types")]),t._v(" "),a("th",[t._v("必填")]),t._v(" "),a("th",[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("symbol")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("是")]),t._v(" "),a("td",[t._v('合约名称中需有"-"，如BTC-USDT')])]),t._v(" "),a("tr",[a("td",[t._v("step")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("是")]),t._v(" "),a("td",[t._v("合并深度Types，step0，step1，step2，step3，step4，step5")])]),t._v(" "),a("tr",[a("td",[t._v("level")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("是")]),t._v(" "),a("td",[t._v("档数, 如 level5，level10，level20，level50，level100")])])])]),t._v(" "),a("p",[a("strong",[t._v("备注")])]),t._v(" "),a("p",[t._v('"step" 合并深度Types')]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("参数名")]),t._v(" "),a("th",[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("step0")]),t._v(" "),a("td",[t._v("不合并深度")])]),t._v(" "),a("tr",[a("td",[t._v("step1")]),t._v(" "),a("td",[t._v("按价格最小精度乘以10合并深度数据")])]),t._v(" "),a("tr",[a("td",[t._v("step2")]),t._v(" "),a("td",[t._v("按价格最小精度乘以100合并深度数据")])]),t._v(" "),a("tr",[a("td",[t._v("step3")]),t._v(" "),a("td",[t._v("按价格最小精度乘以1000合并深度数据")])]),t._v(" "),a("tr",[a("td",[t._v("step4")]),t._v(" "),a("td",[t._v("按价格最小精度乘以10000合并深度数据")])]),t._v(" "),a("tr",[a("td",[t._v("step5")]),t._v(" "),a("td",[t._v("按价格最小精度乘以100000合并深度数据")])])])]),t._v(" "),a("p",[t._v('"level" 深度档数定义')]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("参数名")]),t._v(" "),a("th",[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("level5")]),t._v(" "),a("td",[t._v("5档")])]),t._v(" "),a("tr",[a("td",[t._v("level10")]),t._v(" "),a("td",[t._v("10档")])]),t._v(" "),a("tr",[a("td",[t._v("level20")]),t._v(" "),a("td",[t._v("20档")])]),t._v(" "),a("tr",[a("td",[t._v("level50")]),t._v(" "),a("td",[t._v("50档")])]),t._v(" "),a("tr",[a("td",[t._v("level100")]),t._v(" "),a("td",[t._v("100档")])])])]),t._v(" "),a("p",[a("strong",[t._v("推送数据")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("返回字段")]),t._v(" "),a("th",[t._v("字段说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("code")]),t._v(" "),a("td",[t._v("是否有错误信息，0为正常，1为有错误")])]),t._v(" "),a("tr",[a("td",[t._v("dataType")]),t._v(" "),a("td",[t._v("订阅的数据Types，例如 market.depth.BTC-USDT.step0.level5")])]),t._v(" "),a("tr",[a("td",[t._v("data")]),t._v(" "),a("td",[t._v("推送内容")])]),t._v(" "),a("tr",[a("td",[t._v("asks")]),t._v(" "),a("td",[t._v("卖方深度")])]),t._v(" "),a("tr",[a("td",[t._v("bids")]),t._v(" "),a("td",[t._v("买方深度")])]),t._v(" "),a("tr",[a("td",[t._v("p")]),t._v(" "),a("td",[t._v("price价格")])]),t._v(" "),a("tr",[a("td",[t._v("v")]),t._v(" "),a("td",[t._v("volume数量")])])])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("    # Response\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"code"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dataType"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"market.depth.BTC-USDT.step0.level5"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"data"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"asks"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"p"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5319.94")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"v"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.05483456")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"p"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5320.19")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"v"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.05734545")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"p"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5320.39")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"v"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.16307999")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"p"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5319.94")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"v"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.05483456")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"p"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5320.19")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"v"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.05734545")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"p"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5320.39")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"v"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.16307999")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bids"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"p"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5319.94")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"v"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.05483456")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"p"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5320.19")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"v"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.05734545")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"p"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5320.39")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"v"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.16307999")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"p"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5319.94")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"v"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.05483456")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"p"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5320.19")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"v"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.05734545")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"p"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5320.39")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"v"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.16307999")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"_2-订单最新成交记录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-订单最新成交记录"}},[t._v("#")]),t._v(" 2. 订单最新成交记录")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("订阅单个合约的逐笔成交明细\n")])])]),a("p",[a("strong",[t._v("订阅Types")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("dataType 为 market.trade.detail.$Symbol，比如market.trade.detail.BTC-USDT\n")])])]),a("p",[a("strong",[t._v("订阅参数")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("参数名")]),t._v(" "),a("th",[t._v("参数Types")]),t._v(" "),a("th",[t._v("必填")]),t._v(" "),a("th",[t._v("字段描述")]),t._v(" "),a("th",[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("symbol")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("是")]),t._v(" "),a("td",[t._v("合约名称")]),t._v(" "),a("td",[t._v('合约名称中需有"-"，如BTC-USDT')])])])]),t._v(" "),a("p",[a("strong",[t._v("推送数据")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("返回字段")]),t._v(" "),a("th",[t._v("字段说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("code")]),t._v(" "),a("td",[t._v("是否有错误信息，0为正常，1为有错误")])]),t._v(" "),a("tr",[a("td",[t._v("dataType")]),t._v(" "),a("td",[t._v("订阅的数据Types，例如 market.tradeDetail.BTC-USDT")])]),t._v(" "),a("tr",[a("td",[t._v("data")]),t._v(" "),a("td",[t._v("推送内容")])]),t._v(" "),a("tr",[a("td",[t._v("trades")]),t._v(" "),a("td",[t._v("逐笔成交")])]),t._v(" "),a("tr",[a("td",[t._v("time")]),t._v(" "),a("td",[t._v("成交时间")])]),t._v(" "),a("tr",[a("td",[t._v("makerSide")]),t._v(" "),a("td",[t._v("吃单方向(Bid / Ask 买/卖)")])]),t._v(" "),a("tr",[a("td",[t._v("price")]),t._v(" "),a("td",[t._v("成交价格")])]),t._v(" "),a("tr",[a("td",[t._v("volume")]),t._v(" "),a("td",[t._v("成交数量")])])])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v(" # Response\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"code"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dataType"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"market.tradeDetail.BTC-USDT"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"data"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n         "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"trades"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n             "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                 "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"time"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2018-04-25T15:00:51.999Z"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                 "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"makerSide"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Bid"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                 "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"price"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.279563")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                 "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"volume"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n             "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n             "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                 "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"time"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2018-04-25T15:00:51.000Z"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                 "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"makerSide"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Ask"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                 "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"price"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.279563")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                 "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"volume"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("300")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n             "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n         "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"_3-订阅合约k线数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-订阅合约k线数据"}},[t._v("#")]),t._v(" 3. 订阅合约k线数据")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("订阅单个合约的行情k线数据\n")])])]),a("p",[a("strong",[t._v("订阅Types")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("dataType 为 market.kline.$Symbol.$KlineType，比如market.kline.$Symbol.BTC-USDT.1min\n")])])]),a("p",[a("strong",[t._v("订阅参数")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("参数名")]),t._v(" "),a("th",[t._v("参数Types")]),t._v(" "),a("th",[t._v("必填")]),t._v(" "),a("th",[t._v("字段描述")]),t._v(" "),a("th",[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("symbol")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("是")]),t._v(" "),a("td",[t._v("合约名称")]),t._v(" "),a("td",[t._v('合约名称中需有"-"，如BTC-USDT')])]),t._v(" "),a("tr",[a("td",[t._v("klineType")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("是")]),t._v(" "),a("td",[t._v("k线Types")]),t._v(" "),a("td",[t._v("参考字段说明，如分钟，小时，周等")])])])]),t._v(" "),a("p",[a("strong",[t._v("备注")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("klineType 字段说明")]),t._v(" "),a("th")])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("1")]),t._v(" "),a("td",[t._v("1m一分钟K线")])]),t._v(" "),a("tr",[a("td",[t._v("3")]),t._v(" "),a("td",[t._v("3m三分钟K线")])]),t._v(" "),a("tr",[a("td",[t._v("5")]),t._v(" "),a("td",[t._v("5m五分钟K线")])]),t._v(" "),a("tr",[a("td",[t._v("15")]),t._v(" "),a("td",[t._v("15m十五分钟K线")])]),t._v(" "),a("tr",[a("td",[t._v("30")]),t._v(" "),a("td",[t._v("30m三十分钟K线")])]),t._v(" "),a("tr",[a("td",[t._v("60")]),t._v(" "),a("td",[t._v("1h一小时K线")])]),t._v(" "),a("tr",[a("td",[t._v("120")]),t._v(" "),a("td",[t._v("2h两小时K线")])]),t._v(" "),a("tr",[a("td",[t._v("240")]),t._v(" "),a("td",[t._v("4h四小时K线")])]),t._v(" "),a("tr",[a("td",[t._v("360")]),t._v(" "),a("td",[t._v("6h六小时K线")])]),t._v(" "),a("tr",[a("td",[t._v("720")]),t._v(" "),a("td",[t._v("12h十二小时K线")])]),t._v(" "),a("tr",[a("td",[t._v("1D")]),t._v(" "),a("td",[t._v("1D日K线")])]),t._v(" "),a("tr",[a("td",[t._v("1W")]),t._v(" "),a("td",[t._v("1W周K线")])]),t._v(" "),a("tr",[a("td",[t._v("1M")]),t._v(" "),a("td",[t._v("1M月K线")])])])]),t._v(" "),a("p",[a("strong",[t._v("推送数据")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("返回字段")]),t._v(" "),a("th",[t._v("字段说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("code")]),t._v(" "),a("td",[t._v("是否有错误信息，0为正常，1为有错误")])]),t._v(" "),a("tr",[a("td",[t._v("data")]),t._v(" "),a("td",[t._v("推送内容")])]),t._v(" "),a("tr",[a("td",[t._v("dataType")]),t._v(" "),a("td",[t._v("数据Types")])]),t._v(" "),a("tr",[a("td",[t._v("klineInfosVo")]),t._v(" "),a("td",[t._v("K线数据")])]),t._v(" "),a("tr",[a("td",[t._v("close")]),t._v(" "),a("td",[t._v("收盘价")])]),t._v(" "),a("tr",[a("td",[t._v("high")]),t._v(" "),a("td",[t._v("最高价")])]),t._v(" "),a("tr",[a("td",[t._v("low")]),t._v(" "),a("td",[t._v("最低价")])]),t._v(" "),a("tr",[a("td",[t._v("open")]),t._v(" "),a("td",[t._v("收盘价")])]),t._v(" "),a("tr",[a("td",[t._v("statDate")]),t._v(" "),a("td",[t._v("k线时间")])]),t._v(" "),a("tr",[a("td",[t._v("time")]),t._v(" "),a("td",[t._v("k线时间戳，单位是毫秒")])]),t._v(" "),a("tr",[a("td",[t._v("volume")]),t._v(" "),a("td",[t._v("成交量")])])])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v(" # Response\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"code"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"data"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n         "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"klineInfosVo"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n             "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                 "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"close"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("54564.31")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n                 "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"high"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("54711.73")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                 "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"low"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("54418.27")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                 "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"open"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("54577.41")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n                 "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"statDate"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2021-04-29T11:00:00.000+0800"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n                 "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"time"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1619665200000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n                 "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"volume"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1607.0727000000002")]),t._v("\n             "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n         "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dataType"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"market.kline.BTC-USDT.30min"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 数据Types")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("strong",[t._v("备注")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("更多返回错误代码请看首页的错误代码描述\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);