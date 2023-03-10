<template>
    <div class="search-view">
      <the-header :title= "searchKeyword"/>
        <div v-if="gameDataList.length > 0" class="search-view--content">
          <div class="search-view__count">
            전체 검색 갯수:  {{ totalCount }}개
          </div>
          <div
            v-for="gameData in gameDataList"
            :key="gameData.appid"
            class="search-view__body"
            >
            <GameInfoItem :games = gameData width="800" height="215"/>
          </div>
          <InfiniteLoading @infinite="infiniteLoading()"/>
        </div>
        <div v-else class="search-view--no-content">
          검색결과 게임이 없습니다. 맞춤법을 확인해주세요
        </div>
      <the-footer/>
    </div>
</template>

<script setup lang="ts">
import {
  onMounted, reactive, ref, Ref, watch,
} from 'vue';
import { useRoute } from 'vue-router';
import InfiniteLoading from 'v3-infinite-loading';
import TheHeader from '../components/common/TheHeader.vue';
import GameInfoItem from '../components/feat/GameInfoItem.vue';
import TheFooter from '../components/common/TheFooter.vue';
import getGameInfoList from '../api/api';
import { IGame } from '../interfaces/IGame.interface';

const gameDataList: Array<IGame> = reactive([]);
const searchKeyword: Ref<string> = ref('' as string);
const totalCount: Ref<number> = ref(0);
const totalPage: Ref<number> = ref(0);
const curPage: Ref<number> = ref(0);
const route = useRoute();

async function searchHandler(title: string, page?: number) {
  searchKeyword.value = title;
  const res = await getGameInfoList(title, page);
  gameDataList.push(...res.data.gameListItemResponses);
  totalCount.value = res.data.totalCount;
  totalPage.value = totalCount.value / 5;
  curPage.value += 1;
}

async function infiniteLoading() {
  console.log(totalPage.value);
  console.log(curPage.value);
  if (curPage.value <= totalPage.value) {
    searchHandler(searchKeyword.value, curPage.value);
  }
}

onMounted(async () => {
  const { title } = route.query;
  await searchHandler(title as string, 0);
});

function resetData() {
  gameDataList.splice(0, gameDataList.length);
  curPage.value = 0;
}

watch(() => route.query.title, (keyword) => {
  resetData();
  searchHandler(keyword as string, 0);
});

</script>

<style lang="scss" scoped>
.search-view {
  display: flex;
  flex-direction: column;

  flex: 1;
  // overflow: auto;

  &--no-content {
    flex:1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &--content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &__body {
    margin: 30px 0;
  }
  &__count {
    margin: 15px 80px;
    font-size: 12px;
    font-weight: bold;
    align-self: flex-end;
  }
}
</style>
