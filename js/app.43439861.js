(function(){"use strict";var n={6095:function(n,e,t){var a=t(6848),i=function(){var n=this,e=n._self._c;return e("div",{attrs:{id:"app"}},[e("div",{staticClass:"container"},[e("SatelliteSheets",{attrs:{data:n.data,listLoading:n.loading}})],1)])},s=[],o=t(3518),d=function(){var n=this,e=n._self._c;return e("div",{ref:"container",staticClass:"satellite-sheets-container"},[e("el-dropdown",{staticClass:"menu",attrs:{trigger:"click"},on:{command:n.handleCommand}},[e("el-button",{attrs:{type:"primary"}},[n._v(" 请选择"),e("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),e("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},n._l(n.BigData,(function(t,a){return e("el-dropdown-item",{key:a,attrs:{command:t}},[n._v(n._s(t))])})),1)],1),e("el-table",{directives:[{name:"loading",rawName:"v-loading",value:n.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:n.data,stripe:"",border:""}},[e("el-table-column",{attrs:{prop:"name",label:"数据名",width:"100"}}),e("el-table-column",{attrs:{prop:"descriptions",label:"数据描述"},scopedSlots:n._u([{key:"default",fn:function(t){return[e("span",{domProps:{innerHTML:n._s(t.row.descriptions.split("\n").join("<br>"))}})]}}])}),e("el-table-column",{attrs:{prop:"time",label:"时间段",width:"200"}}),e("el-table-column",{attrs:{prop:"note",label:"备注"},scopedSlots:n._u([{key:"default",fn:function(t){return[e("span",{domProps:{innerHTML:n._s(t.row.note.split("\n").join("<br>"))}})]}}])})],1)],1)},r=[],m=(t(4114),{data(){return{BigData:[],originData:[]}},created(){setTimeout((()=>{this.data.forEach((n=>{this.BigData.includes(n.idOfName)||this.BigData.push(n.idOfName),this.originData=this.data}))}),1e3)},props:{data:{type:Array,default:()=>[]},loading:{type:Boolean,default:!1}},methods:{handleCommand(n){this.data=this.originData.filter((e=>e.idOfName===`${n}`)),this.$message.success("已选择"+n)}}}),l=m,c=t(1656),f=(0,c.A)(l,d,r,!1,null,"55956846",null),M=f.exports,p={name:"App",components:{SatelliteSheets:M},data(){return{loading:!1}},created(){this.loading=!0,this.$store.dispatch("satellite/fetchData"),this.loading=!1},computed:{...(0,o.aH)("satellite",["data"])}},O=p,u=(0,c.A)(O,i,s,!1,null,null,null),D=u.exports,L=t(9143),S=t.n(L),N=t(8355);const I=N.A.create();async function h(){return await I.get("/api/satelliteData")}I.interceptors.response.use((n=>n.data.data));var T={namespaced:!0,state:{data:[]},mutations:{setData(n,e){n.data=e},setDataNumber(n,e){n.dataNumber=e}},actions:{async fetchData(n){const e=await h();n.commit("setData",e)}}};a["default"].use(o.Ay);const v=new o.Ay.Store({modules:{satellite:T}});var A=v,g=t(4240),b=t.n(g);b().mock("/api/satelliteData","get",{code:0,msg:"未知错误",data:[{name:"Landsat 8",descriptions:" Level 1T级别陆地资源卫星数据\n11波段分辨率15、30、100\nUTM - WGS84投影坐标系",time:"2013.2至今",note:"Level1T地形矫正影像-Level 1T标准地形校正\nL1T数据产品经过系统辐射校正和地面控制点几何校正, 并且通过DEM进行了地地形校正。",idOfName:"Landsat"},{name:"L7 SLC-off",descriptions:" Level 1T标准地形校正\n15m -全色波段8;30m -反射波段1-5和7;60m -热波段6H和6L\nUTM - WGS84投影坐标系",time:"2013.2至今",note:"2003.5.31日landsat 7 SLC故障之后的异常数据产品",idOfName:"Landsat"},{name:"Landsat4-5TM",descriptions:" Level 1T标准地形校正\n波段1-5和波段7的空间分辨率为30米，波段6(热红外波段)的空间分辨率为120米\nUTM - wGS 84南极洲极地投影",time:"1982~2011年11月",note:"Landsat-4和Landsat- 5携带同样的传感器，重复周期16天",idOfName:"Landsat"},{name:"Landsat4-5TM卫星数字产品",descriptions:" 卫星：Landsat 4和Landsat 5\n数据级别：Level 1T标准地形校正\n传感器：Thematic Mapper（TM）\n空间分辨率：波段1到波段5以及波段7的空间分辨率为30米，波段6（热红外波段）的空间分辨率可能为120米。\n投影坐标系：通常采用UTM - WGS 84南极洲极地投影",time:"1982年至2011年11月。",note:"校正内容：进行了辐射校正和地面控制点几何校正，以及通过DEM进行的地形校正。\n重复周期：Landsat-4和Landsat-5携带同样的传感器，重复周期为16天。",idOfName:"Landsat"},{name:"Landsat 中国内陆水体信息产品",descriptions:" 数据来源：Landsat系列卫星数据，包括Landsat 5、Landsat 7和Landsat 8等。\n数据类型：多光谱遥感影像数据\n空间分辨率：通常为30米，适用于较精细的水体特征提取和分析。\n数据产品内容：主要包括水体边界、水体面积、水体变化等信息进行提取和分析。\n应用领域：可用于水资源管理、水环境监测、自然灾害风险评估等领域的研究和应用。",time:"数据覆盖的时间段可能根据产品版本和发布时间而有所不同，通常从Landsat卫星任务开始至今。",note:"数据处理方法：通常采用遥感影像处理和水体提取算法，例如基于阈值、多特征融合等方法\n数据格式：可能以栅格数据、矢量数据或其他格式发布，以满足用户的不同需求。覆盖范围：主要针对中国境内的内陆水体",idOfName:"Landsat"},{name:"Landsat 全球合成数据",descriptions:"数据来源：Landsat系列卫星数据，主要包括Landsat 4、Landsat 5和Landsat 7等卫星的多光谱遥感影像数据。\n数据类型：多光谱遥感影像数据，通常包括多个光谱波段，如可见光、红外线等波段。\n空间分辨率：通常为30米，适用于较为精细的地表特征提取和分析。",time:"1984年至1997年",note:"数据产品内容：包括全球范围内的地表影像、地表覆盖分类、土地利用/土地覆盖变化等信息。\n数据处理方法：通常采用遥感影像处理、地物分类和变化检测算法，以提取和分析地表特征及其变化。\n数据格式：通常以栅格数据格式发布，方便用户在地理信息系统（GIS）软件中进行处理和分析。\n应用领域：可用于土地利用规划、环境监测、自然资源管理、灾害风险评估等多个领域的研究和应用",idOfName:"Landsat"},{name:"Landsat7 ETM SLC-off 卫星数字产品",descriptions:"数据来源：Landsat 7卫星搭载的Enhanced Thematic Mapper Plus (ETM+)传感器获取的数据。\n数据类型：多光谱遥感影像数据，包括可见光、红外线等波段。\n空间分辨率：可见光波段为30米，红外线波段为60米。\n数据产品内容：包括地表影像、地表覆盖分类、土地利用/土地覆盖变化等信息。",time:"2003年至今",note:"数据处理方法：由于Landsat 7卫星在2003年出现SLC（扫描线校正）故障，导致部分影像数据的SLC未能准确校正，因此该产品被称为SLC-off产品。这些数据可能需要经过额外的处理和校正，以弥补SLC故障引起的影响。\n数据格式：通常以栅格数据格式发布，支持在GIS软件中进行处理和分析。\n应用领域：可用于土地利用规划、资源管理、环境监测、自然灾害监测等领域的研究和应用。",idOfName:"Landsat"},{name:"LANDSAT_45 TM_C2_L2",descriptions:"级别2数据产品： 级别2数据产品是经过校正和处理的Landsat TM数据，以确保数据质量和准确性。\n这些产品通常包括大气校正、地表反射率校正、几何校正等步骤，以提供可靠的地表信息。\n数据内容： 这些数据产品通常包括多个光谱波段的影像数据，如可见光、红外线等波段，以及其他辅助数据，如地表温度等。",time:"未查到相关资料",note:"数据格式： 通常以栅格数据格式发布，如GeoTIFF等，方便在地理信息系统（GIS）软件中进行处理和分析。\n应用领域： 这些数据产品可用于土地利用/土地覆盖分类、环境监测、资源管理、灾害监测等多个领域的研究和应用。",idOfName:"Landsat"},{name:"Landsat 7 TM C2 L2",descriptions:"传感器类型： Landsat 7搭载了Thematic Mapper (TM)传感器，它能够获取多光谱遥感影像数据，包括可见光、红外线等波段。\n数据内容： 数据产品通常包括多个光谱波段的影像数据，通常为可见光、近红外线、中红外线和热红外线波段。此外，还可能包括辅助数据，如地表温度、云覆盖等信息。\n空间分辨率： Landsat 7 TM传感器的空间分辨率为30米，这意味着每个像素代表地球表面的30米×30米区域。\n时间分辨率： Landsat 7卫星通常以16天的时间间隔在同一地区观测一次，这使得用户可以获取到长期的时间序列数据，用于监测地表变化和动态过程。",time:"1999年4月至今",note:"数据格式： 通常以栅格数据格式发布，如GeoTIFF等。这种格式在地理信息系统（GIS）软件中广泛使用，方便用户进行数据处理、分析和可视化。\n级别2处理： 数据产品经过了级别2处理，包括大气校正、地表反射率校正、几何校正等步骤，以确保数据质量和准确性。这使得数据更适合进行科学研究和应用。\n应用领域： 这些数据产品可用于土地利用/土地覆盖分类、环境监测、资源管理、灾害监测等多个领域的研究和应用。",idOfName:"Landsat"},{name:"Landsat1-3 MSS卫星数字产品",descriptions:"传感器类型： Landsat 1-3号卫星搭载的是多谱段扫描仪（MSS）传感器，它们是早期的Landsat卫星，用于获取地球表面的多光谱影像数据\n数据内容： 数据产品包括四个波段的影像数据，分别是红、绿、蓝和近红外线波段。这些波段的数据可以用于进行土地覆盖分类、植被监测、水资源管理等应用。\n空间分辨率： Landsat 1-3 MSS传感器的空间分辨率为80米，这意味着每个像素代表地球表面的80米×80米区域。时间分辨率： 这些卫星在运行期间以不同的时间间隔观测同一地区，但与后续的Landsat卫星相比，时间分辨率较低，可能不如后续卫星提供的观测频率高。",time:"1972年~1983年",note:"数据格式： 数据通常以数字格式存储，如GeoTIFF或JPEG格式，便于存储、传输和处理。\n应用领域： 这些数据产品可用于历史土地利用/土地覆盖分类、环境变化分析、自然资源管理等研究和应用。尽管空间分辨率相对较低，但在一些研究和应用中，这些历史数据仍然具有一定的参考价值。",idOfName:"Landsat"},{name:"Landsat4-5 MSS 卫星数字产品",descriptions:"传感器类型： Landsat 4和Landsat 5卫星搭载的是多谱段扫描仪（MSS）传感器，它们是Landsat卫星系列的后续型号，用于获取地球表面的多光谱影像数据。\n数据内容： 数据产品包括四个主要波段的影像数据，通常包括红、绿、蓝和近红外线波段。这些波段的数据可用于进行土地覆盖分类、植被监测、水资源管理等应用。\n空间分辨率： Landsat 4-5 MSS传感器的空间分辨率为80米，与Landsat 1-3 MSS相同，每个像素代表地球表面的80米×80米区域。时间分辨率： 这些卫星在运行期间以不同的时间间隔观测同一地区，提供了一系列时间点的观测数据，但与后续的Landsat卫星相比，时间分辨率较低。",time:"1982年~2013年",note:"数据格式： 数据通常以数字格式存储，如GeoTIFF或JPEG格式，便于存储、传输和处理。\n应用领域： 这些数据产品可用于土地利用/土地覆盖分类、环境变化分析、资源管理、自然灾害监测等研究和应用。尽管空间分辨率相对较低，但在一些研究和应用中，这些历史数据仍然具有一定的参考价值。",idOfName:"Landsat"},{name:"Landsat 8-9 OLI/TIRS C2",descriptions:"传感器类型： Landsat 8和Landsat 9卫星搭载了操作地球成像仪（OLI）和热红外传感器（TIRS）Payloads，提供了高分辨率（30米）的多光谱（包括8个波段）和热红外（1个波段）遥感数据。\n数据内容： 数据产品包括来自OLI和TIRS传感器的影像数据，其中OLI提供了可见光和近红外波段的数据，而TIRS提供了热红外波段的数据。这些数据可用于进行土地覆盖分类、植被监测、水资源管理、土地利用规划等应用。\n空间分辨率： Landsat 8-9 OLI/TIRS C2数据的空间分辨率为30米，这使得它们比之前的Landsat卫星具有更高的空间分辨率，允许更详细的地表特征分析。",time:"2013年~至今",note:"数据格式： 数据通常以数字格式存储，如GeoTIFF或JPEG格式，便于存储、传输和处理。\n应用领域： 这些数据产品可用于广泛的应用领域，包括地表覆盖变化监测、环境变化分析、资源管理、自然灾害监测等。",idOfName:"Landsat"},{name:"MYD13Q1250M植被指数16天合成产品",descriptions:"产品类型： 植被指数 16 天合成产品，用于反映每 16 天内地表植被的状况。\n空间分辨率： 大约为 1250 米的空间分辨率时间分辨率：16天\n覆盖范围： 覆盖全球植被指数类型： 这种产品通常会提供多种植被指数，如归一化植被指数（NDVI）、修正的归一化植被指数（EVI）、地表叶面积指数（LAI）等，以提供不同植被指标的信息。",time:"2000 年至今",note:"数据格式： 数据通常以标准格式（如 HDF）发布，其中包含了多个波段的植被指数数据\n应用领域： 这种产品可用于监测植被的生长状况、变化趋势、健康状况以及对环境变化的响应，广泛应用于农业、林业、生态学、气象学等领域的研究和应用。",idOfName:"MODIS"},{name:"MYD09A1 50OM地表反射率8天合成产品",descriptions:"产品类型： 地表反射率 8 天合成产品，用于反映每 8 天内地表反射率的状况。\n空间分辨率：大约为 500 米的空间分辨率\n时间分辨率： 8 天覆盖范围： 覆盖全球",time:"2000 年至今",note:"数据格式： 数据通常以标准格式（如 HDF）发布，其中包含了多个波段的地表反射率数据\n波段信息：提供多个波段的地表反射率数据，包括不同波段下的太阳光反射率、大气顶部反射率等。\n应用领域： 这种产品可用于监测地表的光学特性、地表覆盖类型、地表变化等，广泛应用于环境监测、自然资源管理、气象学等领域的研究和应用。",idOfName:"MODIS"},{name:"MOD17A2 1KM总初级生产力8天合成产品",descriptions:"产品类型： MOD17A2 1KM 总初级生产力 8 天合成产品，用于反映每 8 天内地表的总初级生产力。\n空间分辨率： 大约为 1 公里的空间分辨率\n时间分辨率： 8 天覆盖范围： 覆盖全球范围\n波段信息： MOD17A2 产品通常会提供多个波段的总初级生产力数据，包括植被净初级生产力、植被总初级生产力等",time:"2000 年至今",note:"数据格式： 数据通常以标准格式（如 HDF）发布，其中包含了多个波段的总初级生产力数据，可以在各种遥感软件中进行处理和分析。\n应用领域： 这种产品可用于监测全球植被生长状况、生态系统功能、碳循环等，广泛应用于生态学、环境科学、气候变化研究等领域的研究和应用。",idOfName:"MODIS"},{name:"MYD13A3 1KM月植被指数L3产品",descriptions:"产品类型： MYD13A3 1KM 月植被指数 L3 产品，用于反映每月地表的植被状况。\n空间分辨率： 每个像素代表大约 1 公里 × 1 公里的地面区域，提供了较为精细的空间信息。\n时间分辨率： 月度，即每月生成一次产品，提供了月度植被指数的变化趋势。\n覆盖范围： 覆盖全球\n波段信息： MYD13A3 产品通常会提供多个波段的植被指数数据，包括 NDVI（归一化差值植被指数）等。",time:"2000 年至今",note:"数据格式： 通常以标准格式（如 HDF）发布，包含了多个波段的植被指数数据\n应用领域： 这种产品可用于监测植被生长状态、土地利用变化、气候变化影响等，广泛应用于生态学、农业、水资源管理等领域的研究和应用",idOfName:"MODIS"},{name:"MOD11A21KM地表温度/发射率8天合成产品",descriptions:"产品类型： MOD11A2 1KM 地表温度/发射率 8 天合成产品，用于反映每 8 天内地表的温度和发射率情况。\n空间分辨率： 每个像素代表大约 1 公里 × 1 公里的地面区域\n时间分辨率： 8 天\n覆盖范围： 覆盖全球\n波段信息： MOD11A2 产品通常会提供多个波段的地表温度和发射率数据，包括日间和夜间的温度、发射率等。",time:"2000 年 至今",note:"数据格式： 通常以标准格式（如 HDF）发布，包含了多个波段的地表温度和发射率数据\n应用领域： 这种产品可用于监测地表温度分布、地表能量平衡、城市热岛效应等，广泛应用于气象学、土地利用规划、环境监测等领域的研究和应用。",idOfName:"MODIS"},{name:"MOD09Q1250M地表反射率8天合成产品",descriptions:"产品类型： MOD09Q1250M是MODIS Level 3地表反射率产品，用于估算地表反射率。\n空间分辨率： 每个像素代表大约1250米×1250米的地表区域\n时间分辨率： 8天\n覆盖范围： 覆盖全球\n波段信息： MOD09Q1250M产品提供了不同波段的地表反射率数据，包括红、近红外和短波红外等波段",time:"2000年至今",note:"数据格式： 通常以标准格式（如HDF）发布\n应用领域： 这种产品可用于监测地表覆盖类型、植被状况、土地利用变化等，广泛应用于地学、生态学、农业等领域的研究和应用",idOfName:"MODIS"},{name:"MYD14A2 1KM温度异常/火8天合成产品",descriptions:"产品类型： MYD14A2是MODIS Level 3火灾监测产品，提供了1公里分辨率的温度异常/火数据。\n空间分辨率： 每个像素代表大约1公里的地表区域\n时间分辨率： 该产品以8天为周期合成\n覆盖范围： 该产品覆盖全球范围，可用于各种地理区域的火灾监测和分析。",time:"2002年至今",note:"数据格式： 通常以标准格式（如HDF）发布\n应用领域： 这种产品可用于监测火灾活动、火险评估、生态环境保护等，广泛应用于林业、应急管理、气象学等领域的研究和应用。",idOfName:"MODIS"},{name:"MOD09GA 500M地表反射率每日产品",descriptions:"产品类型： MOD09GA是MODIS Level 3地表反射率产品，提供了500米分辨率的每日数据。\n空间分辨率： 每个像素代表大约500米的地表区域\n时间分辨率： 该产品每日更新\n覆盖范围：覆盖全球\n波段信息： MOD09GA产品提供了不同波段的地表反射率数据，包括红光、近红外、短波红外等",time:"2000年至今",note:"数据格式： 通常以标准格式（如HDF）发布\n应用领域： 这种产品可用于监测地表覆盖变化、土地利用变化、植被生长状态等，广泛应用于农业、生态学、城市规划等领域的研究和应用。",idOfName:"MODIS"},{name:"MYD13A1 500M植被指数16天合成产品",descriptions:"产品类型： MYD13A1是MODIS Level 3植被指数产品，提供了500米分辨率的16天合成数据。\n空间分辨率： 每个像素代表大约500米的地表区域\n时间分辨率： 该产品以16天为周期合成\n覆盖范围： 覆盖全球\n植被指数类型： MYD13A1产品提供了不同类型的植被指数数据，如归一化植被指数（NDVI）和增强型植被指数（EVI）等。",time:"2002年至今",note:"数据格式： 通常以标准格式（如HDF）发布\n应用领域： 这种产品可用于监测植被覆盖变化、植被生长状态、干旱监测等，广泛应用于农业、生态学、气象学等领域的研究和应用。",idOfName:"MODIS"},{name:"MOD13A1 500M植被指数16天合成产品",descriptions:"产品类型： MOD13A1是MODIS Level 3植被指数产品，提供了500米分辨率的16天合成数据。\n空间分辨率： 每个像素代表大约500米的地表区域\n时间分辨率： 该产品以16天为周期合成\n覆盖范围： 覆盖全球植被指数类型： MOD13A1产品提供了不同类型的植被指数数据，如归一化植被指数（NDVI）和增强型植被指数（EVI）等。",time:"2000年至今",note:"数据格式： 通常以标准格式（如HDF）发布\n应用领域： 这种产品可用于监测植被覆盖变化、植被生长状态、干旱监测等，广泛应用于农业、生态学、气象学等领域的研究和应用",idOfName:"MODIS"},{name:"MYD031KM经纬度坐标数据",descriptions:"产品类型： MYD031KM是MODIS Level 1B地球定标数据产品，提供了1公里分辨率的经纬度坐标数据。\n空间分辨率： 每个像素代表大约1公里的地表区域\n数据内容： 该产品包含了每个像素的经度和纬度信息，以及地表的辐射度量信息，可用于地球表面特征的定位和分析。\n时间分辨率： 该产品以每日为周期提供数据\n覆盖范围： 覆盖全球",time:"2003年至今",note:"数据格式： 通常以标准格式（如HDF）发布\n应用领域： 这种产品可用于地表特征的定位和分析、地理信息系统的数据输入等，广泛应用于地球科学、环境监测、地理空间分析等领域的研究和应用。",idOfName:"MODIS"},{name:"MOD02QKM 250M地表反射率",descriptions:"产品类型： MOD02QKM是MODIS Level 1B地球定标数据产品，提供了250米分辨率的地表反射率数据\n空间分辨率： 每个像素代表大约250米的地表区域，提供了较为精细的空间分辨率，适用于对地表特征进行详细的分析和监测。\n数据内容： 该产品包含了每个像素的地表反射率信息，以及其他辐射度量信息，可用于地表特征的定位和分析。\n时间分辨率： 该产品以每日为周期提供数据，即每个观测周期提供一次地表反射率数据，适用于对地表特征的日常监测和分析。\n覆盖范围： 该产品覆盖全球范围，可用于各种地理区域的地表特征监测和分析。",time:"2000年至今",note:"数据格式： 通常以标准格式（如HDF）发布，包含了每日地表反射率数据，可在各种地理信息系统软件中进行处理和分析。\n应用领域： 这种产品可用于地表特征的定位和分析、地理信息系统的数据输入等，广泛应用于地球科学、环境监测、地理空间分析等领域的研究和应用。",idOfName:"MODIS"},{name:"MOD021KM 1KM地表反射率",descriptions:"产品类型： MOD021KM是MODIS Level 1B地球定标数据产品，提供了1公里分辨率的地表反射率数据。\n空间分辨率： 每个像素代表大约1公里的地表区域，提供了中等分辨率的空间信息，适用于对地表特征进行一般性的分析和监测。\n数据内容： 该产品包含了每个像素的地表反射率信息，以及其他辐射度量信息，可用于地表特征的定位和分析。\n时间分辨率： 该产品以每日为周期提供数据，即每个观测周期提供一次地表反射率数据，适用于对地表特征的日常监测和分析。\n覆盖范围： 该产品覆盖全球范围，可用于各种地理区域的地表特征监测和分析",time:"2000年至今",note:"数据格式： 通常以标准格式（如HDF）发布，包含了每日地表反射率数据，可在各种地理信息系统软件中进行处理和分析。\n应用领域： 这种产品可用于地表特征的定位和分析、地理信息系统的数据输入等，广泛应用于地球科学、环境监测、地理空间分析等领域的研究和应用。",idOfName:"MODIS"},{name:"GF-1 WFV",descriptions:"高分辨率宽幅相机，提供2米全色、8米多光谱分辨率，大幅宽成像能力，适用于大范围资源监测、城市规划、环境保护等。",time:"2013年至今",note:"最初的GF-1卫星，兼具高分辨率与大幅宽两种成像模式，可在不同应用场景中灵活选择分辨率和覆盖范围。",idOfName:"高分系列"},{name:"GF-2",descriptions:"具有更高的空间分辨率，全色波段分辨率可达1米，多光谱波段分辨率4米，用于更细致的城市建设、农田监测、森林资源调查等。",time:"2014年至今",note:"提供了国内自主可控的高分辨率遥感数据源，对我国自然资源管理和国家安全保障意义重大。",idOfName:"高分系列"},{name:"GF-3",descriptions:"微波遥感卫星，分辨率1米，C频段多极化成像，不受天气条件限制，支持全天候、全天时的遥感观测，特别是在水体、森林、土壤湿度等方面有独特优势。",time:"2016年至今",note:"我国首颗C频段商业化的微波遥感卫星，对地质灾害预警、海洋环境监测等方面具有重要作用。",idOfName:"高分系列"},{name:"GF-4",descriptions:"地球同步轨道卫星，搭载可见光和中波红外凝视相机，分辨率50米/400米，大幅宽超过400公里，用于长期连续稳定的地表观测。",time:"2015年12月至今",note:"是我国第一颗地球同步轨道遥感卫星，能够实现对固定区域的实时、连续监测。",idOfName:"高分系列"},{name:"GF-5",descriptions:"配备高光谱相机，可获取上百个波段的光谱信息，用于精细物质成分分析，例如空气污染、土壤肥力、农作物病虫害监测等。",time:"2018年至今",note:"在环境监测和农业应用领域提供了极为宝贵的高光谱数据资源。",idOfName:"高分系列"},{name:"Sentinel-1",descriptions:"C波段合成孔径雷达（SAR）卫星，全天候、全天时观测，双星星座（S1A & S1B），\n分辨率10-50米，提供干涉测量、宽幅模式等多种产品",time:"自2014年以来持续更新",note:"可实现6天全球覆盖，提供地表形变、冰川监测、洪水检测、海洋动力学监测等功能，尤其在植被穿透、夜间和恶劣天气条件下具有独特优势。",idOfName:"Sentinel"},{name:"Sentinel-2",descriptions:"高分辨率光学卫星，双星星座（S2A & S2B），提供13个多光谱波段，最高分辨率10米，用于土地覆盖、植被监测等",time:"自2015年以来持续更新",note:"五天全球覆盖，提供丰富的植被指数、水体监测、作物生长状态等信息，是农业、林业、环保等领域的重要数据来源",idOfName:"Sentinel"},{name:"Sentinel-3",descriptions:"主要关注海洋与陆地颜色、海面温度、冰雪覆盖、植被参数、火点探测等，包含OLCI、SLSTR等多个传感器",time:"自2016年以来持续更新",note:"双星星座（S3A & S3B），提供全球海洋和陆地生态系统关键参数的连续监测，数据频率高，对于气候变化和环境监测有重要作用。",idOfName:"Sentinel"},{name:"Sentinel-5P",descriptions:"针对空气质量监测，搭载TROPOMI传感器，提供二氧化硫、氮氧化物、臭氧、气溶胶等多种痕量气体的全球分布数据",time:"自2017年以来持续更新",note:"提供高时空分辨率的大气成分信息，对环境污染监测、气候变化影响评估有着极其重要的作用",idOfName:"Sentinel"},{name:"Sentinel-6/-6A/-6B",descriptions:"海平面高度测量任务，监测全球海平面变化、海洋环流、风速等，用于气候变化研究和海洋动力学研究",time:"自2020年以来持续更新",note:"双星星座（Sentinel-6/-6B），接替Jason系列卫星，为全球海平面高度监测提供连续数据，对于气候、海洋和沿海地带的科学研究至关重要。",idOfName:"Sentinel"},{name:"NASA SRTM",descriptions:"雷达干涉测量的全球数字高程模型",time:"2000年单次采集",note:"陆地（除极地），分辨率为30米与90米，广泛应用在地形分析领域。",idOfName:"DEM"},{name:"ASTER GDEM",descriptions:"基于多光谱遥感的全球数字高程模型",time:"2009年首发，后有更新",note:"全球覆盖，分辨率30米，由NASA与METI联合发布，提供比SRTM更为全面的地形数据。",idOfName:"DEM"},{name:"TanDEM-X",descriptions:"双星雷达干涉系统生成的全球高精度数字高程模型",time:"持续更新",note:"德国DLR提供，全球范围，分辨率1-12米，尤其适用于需要极高精度的地形测绘和科学研究。",idOfName:"DEM"},{name:"Copernicus DEM",descriptions:"基于多种卫星数据融合的全球开放访问数字高程模型",time:"不定期更新",note:"欧洲航天局ESA推出，全球覆盖，分辨率30米与90米，适合多种地理空间应用。",idOfName:"DEM"},{name:"AW3D30",descriptions:"ALOS PRISM传感器数据生成的全球数字高程模型",time:"2015年首发",note:"日本JAXA出品，全球覆盖，分辨率30米，具有较高的准确度和一致性，服务于各类地理信息系统应用。",idOfName:"DEM"},{name:"GEBCO",descriptions:"国际合作项目生成的全球海洋与陆地数字高程模型",time:"定期更新",note:"IHO与IOC-UNESCO合作，侧重海洋地形数据，陆地数据整合自多种来源，适合海洋学研究和航海导航等领域。",idOfName:"DEM"},{name:"国产DEM",descriptions:"各国测绘部门制作的不同比例尺国家范围内数字高程模型系列",time:"不定期更新",note:"如中国1:50000、1:10000比例尺DEM，以及省市县级DEM，用于国土规划、工程建设和自然灾害风险管理等。",idOfName:"DEM"}]}),a["default"].use(S()),a["default"].config.productionTip=!1,new a["default"]({store:A,render:n=>n(D)}).$mount("#app")}},e={};function t(a){var i=e[a];if(void 0!==i)return i.exports;var s=e[a]={id:a,loaded:!1,exports:{}};return n[a].call(s.exports,s,s.exports,t),s.loaded=!0,s.exports}t.m=n,function(){t.amdO={}}(),function(){var n=[];t.O=function(e,a,i,s){if(!a){var o=1/0;for(l=0;l<n.length;l++){a=n[l][0],i=n[l][1],s=n[l][2];for(var d=!0,r=0;r<a.length;r++)(!1&s||o>=s)&&Object.keys(t.O).every((function(n){return t.O[n](a[r])}))?a.splice(r--,1):(d=!1,s<o&&(o=s));if(d){n.splice(l--,1);var m=i();void 0!==m&&(e=m)}}return e}s=s||0;for(var l=n.length;l>0&&n[l-1][2]>s;l--)n[l]=n[l-1];n[l]=[a,i,s]}}(),function(){t.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return t.d(e,{a:e}),e}}(),function(){t.d=function(n,e){for(var a in e)t.o(e,a)&&!t.o(n,a)&&Object.defineProperty(n,a,{enumerable:!0,get:e[a]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)}}(),function(){t.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})}}(),function(){t.nmd=function(n){return n.paths=[],n.children||(n.children=[]),n}}(),function(){var n={524:0};t.O.j=function(e){return 0===n[e]};var e=function(e,a){var i,s,o=a[0],d=a[1],r=a[2],m=0;if(o.some((function(e){return 0!==n[e]}))){for(i in d)t.o(d,i)&&(t.m[i]=d[i]);if(r)var l=r(t)}for(e&&e(a);m<o.length;m++)s=o[m],t.o(n,s)&&n[s]&&n[s][0](),n[s]=0;return t.O(l)},a=self["webpackChunksetelite_free_data_sheets"]=self["webpackChunksetelite_free_data_sheets"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=t.O(void 0,[504],(function(){return t(6095)}));a=t.O(a)})();
//# sourceMappingURL=app.43439861.js.map