# 本周页面
# 目录

- [本周资讯](#本周资讯)
- [HHH分析](#未来趋势)
- [本周页面](#本周页面介绍)



# 本周资讯

HHHserver腐竹入住18G?2个服务器要合并？！详情见[HHH分析](#未来趋势)

# 未来趋势
以下是HHHserverFZ原话:  
**我不是那个意思！！**,我只是无聊去18G玩玩！*虽然真的不错*  
我确实也应该发展HHHserver了(悲
<!-- 这啥玩意太敷衍了吧(╬▔皿▔)╯ -->

# 本周页面介绍

试炼密室（Trial Chambers）是主世界中包含试炼刷怪笼和宝库的地下结构。

## 目录
- [生成](#生成)
- [结构](#结构)
- [战利品](#战利品)
- [数据值](#数据值)
- [进度](#进度)

## 生成
<p>
试炼密室自然生成于主世界的深板岩层，其起始结构（柱廊尽头）在Y=-40至-20的高度生成。
<br></br>
在Java版中，试炼密室的生成按照网格状排列。在每34×34个区块的区域中总会有一个试<br>炼密室生成。  在基岩版中，试炼密室的生成频率较低。游戏会尝试在每34×34个区块的区域内生成一个试炼密室。试炼密室只会在特定的生物群系中生成。它们通常会在繁茂洞穴或溶洞的边缘附近生成，而不会在内部生成。  试炼密室可通过试炼密室地图定位。与制图师村民进行交易可获得试炼密室地图，详见交易 § 制图师。
<p>

## 结构
<p>
试炼密室由多个大小不一的相通结构组成，主要分为柱廊、楼道、交叉口和决斗室。
<br></br>
决斗室是供玩家与敌对生物战斗并收获战利品的场地，设有多个试炼刷怪笼，分为近战型（僵尸、尸壳、蜘蛛择其一）、小型近战型（洞穴蜘蛛、幼年僵尸、蠹虫、史莱姆择其一）、远程型（骷髅、沼骸、流浪者择其一）和旋风人刷怪笼。试炼刷怪笼附近地面上的方块指示其激活时会召唤什么生物，详见下文。击杀其生成的所有生物后，每个试炼刷怪笼会喷出一些补给物品或1个试炼钥匙，用试炼钥匙解锁决斗室内的宝库后即可获取战利品，有概率获得试炼密室独有的风弹、沉重核心、2种锻造模板及2种旗帜图案。
<br></br>
试炼密室是全封闭的结构，整体被凝灰岩砖包裹着，只有一个名为entrance_1（入口）的结构会向外裸露出由涂蜡的氧化铜块及其变种构成的3×3墙面。顺着“入口”向下走会到达一条径直延伸的长柱廊。接着玩家可以选择以下路径：

> 1.打开长柱廊侧边的铜门，经过一条楼道，进入一个试炼刷怪笼类型不定的决斗室，或是发现一处死胡同。  
> 2.沿着长柱廊直走到尽头，爬上侧边的梯子到达一处丁字交叉口；  
> 2.1进入一个试炼刷怪笼类型不定的决斗室。  
> 2.2经过一条长柱廊和/或一条短柱廊，进入一个必定有旋风人试炼刷怪笼的决斗室。  

试炼密室的地板为涂蜡的氧化铜块及其变种，墙面嵌有涂蜡的铜块和不同氧化程度的涂蜡的铜灯。铜灯是试炼密室中的主要光源，玩家可用斧为已氧化的铜灯除锈，增加其亮度等级。

### 结构目录
试炼密室的结构文件均位于文件夹client.jar/data/minecraft/structures/trial_chambers[仅JE]或data/behavior_packs/vanilla/structures/trial_chambers[仅BE]中。

#### 柱廊
长柱廊由数量不定的柱廊单元结构随机拼接而成，一些单元结构的侧边带有一扇通向决斗室的铜门。在世界中自然生成时，柱廊两侧的铜灯前会放置一些摆设方块；柱廊上层和底层还会随机放置一些附加结构（Addon），如平台、绊线钩陷阱、随机试炼刷怪笼（不包括旋风人）。
<br></br>
短柱廊结构则存储在单独的结构文件中，且不会生成任何附加结构。

#### 楼道
楼道是将长柱廊与决斗室连通的小型楼梯间结构，有直行楼梯和旋转楼梯。一些楼道会生成箱子。

#### 交叉口
交叉口与3条通道相接，并且还有一个放着木桶和床的休息室，供玩家设置出生点。

#### 决斗室
决斗室共有8种样式，每种决斗室都预留有多个入口。决斗室在世界中自然生成时，其中任意一个入口会与短柱廊、楼道或交叉口相接，其余入口则被封上；宝库和多数试炼刷怪笼会出现在决斗室内固定的位置；决斗室的空旷处还会随机添入多种附加结构：在高处放置桥或悬吊平台，地面放置障碍墙，中央放置刷怪主平台，角落放置走道，走道上可能带有额外的试炼刷怪笼。
<br></br>
大多数会生成旋风人的决斗室还会出现带弹射物的发射器机关，旋风人的风弹可以触发这些机关。
</p>

## 战利品
[战利品列表](https://zh.minecraft.wiki/w/%E6%88%98%E5%88%A9%E5%93%81%E8%A1%A8)

## 数据值
### ID
试炼密室-trial_chambers

## 进度
[进度列表](https://zh.minecraft.wiki/w/%E8%BF%9B%E5%BA%A6)