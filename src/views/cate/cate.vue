<!--  -->
<template>
  <div class="warrap">
    <ul class="content">
      <li>1个</li>
      <li>2个</li>
      <li>3个</li>
      <li>4个</li>
      <li>5个</li>
      <li>6个</li>
      <li>7个</li>
      <li>8个</li>
      <li>9个</li>
      <li>10个</li>
      <li>11个</li>
      <li>12个</li>
      <li>13个</li>
      <li>14个</li>
      <li>15个</li>
      <li>16个</li>
      <li>17个</li>
      <li>18个</li>
      <li>19个</li>
      <li>20个</li>
      <li>21个</li>
      <li>22个</li>
      <li>23个</li>
      <li>24个</li>
      <li>25个</li>
      <li>26个</li>
      <li>27个</li>
      <li>28个</li>
      <li>29个</li>
      <li>30个</li>
      <li>31个</li>
      <li>32个</li>
      <li>33个</li>
      <li>34个</li>
      <li>35个</li>
      <li>36个</li>
      <li>37个</li>
      <li>38个</li>
      <li>39个</li>
      <li>40个</li>
      <li>41个</li>
      <li>42个</li>
      <li>43个</li>
      <li>44个</li>
      <li>45个</li>
      <li>46个</li>
      <li>47个</li>
      <li>48个</li>
      <li>49个</li>
      <li>50个</li>
      <li>51个</li>
      <li>52个</li>
      <li>53个</li>
      <li>54个</li>
      <li>55个</li>
      <li>56个</li>
      <li>57个</li>
      <li>58个</li>
      <li>59个</li>
      <li>60个</li>
      <li>61个</li>
      <li>62个</li>
      <li>63个</li>
      <li>64个</li>
      <li>65个</li>
      <li>66个</li>
      <li>67个</li>
      <li>68个</li>
      <li>69个</li>
      <li>70个</li>
      <li>71个</li>
      <li>72个</li>
      <li>73个</li>
      <li>74个</li>
      <li>75个</li>
      <li>76个</li>
      <li>77个</li>
      <li>78个</li>
      <li>79个</li>
      <li>80个</li>
      <li>81个</li>
      <li>82个</li>
      <li>83个</li>
      <li>84个</li>
      <li>85个</li>
      <li>86个</li>
      <li>87个</li>
      <li>88个</li>
      <li>89个</li>
      <li>90个</li>
      <li>91个</li>
      <li>92个</li>
      <li>93个</li>
      <li>94个</li>
      <li>95个</li>
      <li>96个</li>
      <li>97个</li>
      <li>98个</li>
      <li>99个</li>
      <li>100个</li>
    </ul>
  </div>
</template>

<script>
import Betterscroll from 'better-scroll';
export default {
  name:"cate",
  data() {
    return {
      scroll:null
    }
  },
  mounted() {
    this.scroll =  new Betterscroll('.warrap',{

    })
  },
}

</script>
<style scoped>
.warrap{
  height: 150px;
  background-color: skyblue;
  overflow: hidden;
  /* overflow-y: scroll; */
}
</style>