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
            class="search-view__body">
            <GameInfoItem :games = gameData width="800" height="215"/>
          </div>
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
import TheHeader from '../components/common/TheHeader.vue';
import GameInfoItem from '../components/feat/GameInfoItem.vue';
import TheFooter from '../components/common/TheFooter.vue';
import getGameInfoList from '../api/api';
import { IGame } from '../interfaces/IGame.interface';

const gameDataList: Array<IGame> = reactive([]);
const searchKeyword: Ref<string> = ref('');
const totalCount: Ref<number> = ref(0);
const route = useRoute();

async function searchHandler(title: string, page?: number) {
  searchKeyword.value = title;
  gameDataList.splice(0, 5);
  const res = await getGameInfoList(title, page);
  gameDataList.push(...res.data.gameListItemResponses);
  totalCount.value = res.data.totalCount;
}

onMounted(async () => {
  const { title } = route.query;
  await searchHandler(title as string);
});

watch(() => route.query.title, (keyword) => {
  searchHandler(keyword as string);
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
    margin: 0 250px;
  }
  &__body {
    margin: 30px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  &__count {
    margin: 15px 0;
    font-size: 12px;
  }
}
</style>
