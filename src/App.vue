<template>
  <div>
    <q-layout view="lHh Lpr lff" style="height: 100vh" container class="shadow-2 rounded-borders">
      <q-header elevated class="bg-white" v-if="q.screen.sm">
        <q-toolbar style="display: flex; justify-content: space-between">
          <img src="../public/logo_mir.png" alt="" width="180" height="50" />
          <q-btn
            flat
            @click="drawer = !drawer"
            round
            dense
            icon="menu"
            style="background: #000000;"
          />
        </q-toolbar>
      </q-header>
      <q-drawer
        v-model="drawer"
        show-if-above
        :width="320"
        :breakpoint="640"
        style="background: #E5E5E5; overflow-y: unset; height: 100px"
      >
        <div style="height: calc(100% - 200px); margin-top: 120px; border-right: 1px solid #ddd;">
          <div class="sidebar__item">
            Мой кабинет
            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M15.78 11.2799C15.9207 11.4204 15.9999 11.611 16 11.8099V12.1899C15.9977 12.3883 15.9189 12.5781 15.78 12.7199L10.64 17.8499C10.5462 17.9445 10.4184 17.9978 10.285 17.9978C10.1517 17.9978 10.0239 17.9445 9.93004 17.8499L9.22004 17.1399C9.12598 17.0477 9.07297 16.9215 9.07297 16.7899C9.07297 16.6582 9.12598 16.532 9.22004 16.4399L13.67 11.9999L9.22004 7.55985C9.12539 7.46597 9.07214 7.33817 9.07214 7.20485C9.07214 7.07153 9.12539 6.94374 9.22004 6.84985L9.93004 6.14985C10.0239 6.0552 10.1517 6.00195 10.285 6.00195C10.4184 6.00195 10.5462 6.0552 10.64 6.14985L15.78 11.2799Z"
              />
            </svg>
          </div>
          <div class="sidebar__item" @click="showSubItem = !showSubItem">
            Обучение
            <svg
              v-if="showSubItem"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.72 15.7802C12.5795 15.9209 12.3888 16 12.19 16.0002H11.81C11.6116 15.9979 11.4217 15.919 11.28 15.7802L6.14997 10.6402C6.05532 10.5463 6.00208 10.4185 6.00208 10.2852C6.00208 10.1518 6.05532 10.024 6.14997 9.93016L6.85997 9.22016C6.95214 9.1261 7.07828 9.07309 7.20997 9.07309C7.34166 9.07309 7.46781 9.1261 7.55997 9.22016L12 13.6702L16.44 9.22016C16.5339 9.12551 16.6617 9.07227 16.795 9.07227C16.9283 9.07227 17.0561 9.12551 17.15 9.22016L17.85 9.93016C17.9446 10.024 17.9979 10.1518 17.9979 10.2852C17.9979 10.4185 17.9446 10.5463 17.85 10.6402L12.72 15.7802Z"
              />
            </svg>
            <svg
              v-else
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.78 11.2799C15.9207 11.4204 15.9999 11.611 16 11.8099V12.1899C15.9977 12.3883 15.9189 12.5781 15.78 12.7199L10.64 17.8499C10.5462 17.9445 10.4184 17.9978 10.285 17.9978C10.1517 17.9978 10.0239 17.9445 9.93004 17.8499L9.22004 17.1399C9.12598 17.0477 9.07297 16.9215 9.07297 16.7899C9.07297 16.6582 9.12598 16.532 9.22004 16.4399L13.67 11.9999L9.22004 7.55985C9.12539 7.46597 9.07214 7.33817 9.07214 7.20485C9.07214 7.07153 9.12539 6.94374 9.22004 6.84985L9.93004 6.14985C10.0239 6.0552 10.1517 6.00195 10.285 6.00195C10.4184 6.00195 10.5462 6.0552 10.64 6.14985L15.78 11.2799Z"
              />
            </svg>
          </div>
          <div v-show="showSubItem">
            <div class="sidebar__sub-item sidebar__sub-item-selected">
              Семинары и курсы
            </div>
            <div class="sidebar__sub-item">
              Вебинары
            </div>
            <div class="sidebar__sub-item">
              Самообучение
            </div>
            <div class="sidebar__sub-item">
              Тьютор
            </div>
          </div>
          <div class="sidebar__item">
            Чат
          </div>
          <div class="sidebar__item">
            Конкурсы
          </div>
          <div class="sidebar__item">
            Онлайн преподавание
          </div>
          <div class="sidebar__item">
            Маркет
          </div>
          <div class="sidebar__item">
            Правила
          </div>
          <div class="sidebar__item">
            Представители
          </div>
        </div>

        <div class="absolute-top">
          <div class="img-logo">
            <img src="../public/logo_mir.png" alt="" width="320" height="90" />
          </div>
        </div>
        <div class="absolute-down sidebar__bottom-img">
          <div>
            <q-avatar rounded>
              <img src="https://cdn.quasar.dev/img/avatar.png" />
            </q-avatar>
          </div>
          <div class="user-field">
            <p style="margin-bottom: 8px">Екатерина Иванова</p>
            <button style="background: #FACB64;border: none; border-radius: 8px">2 458 ⌘</button>
          </div>
        </div>
      </q-drawer>

      <q-page-container>
        <q-page padding>
          <div class="flex justify-between items-center q-px-md">
            <div class="row">
              <p class="header-main">
                Витрина
              </p>

              <p class="header-second ">
                Семинары и курсы
              </p>
            </div>

            <div class="col-md-4 col-xs-2 col-sm-2">
              <p class="header-last">
                Моё обучение
              </p>
            </div>
          </div>
          <div class="row" v-show="q.screen.xs">
            <div class="col-11">
              <button class="filter-button">
                Фильтры <span class="filter-button-number">3</span>
              </button>
            </div>
          </div>
          <div class="row q-px-md">
            <p class="author-topic text-uppercase">{{ data?.author.topic }}</p>
          </div>
          <div class="row q-px-md">
            <div class="col-6">
              <p class="author-name">{{ data?.author.name }}</p>
              <p class="author-text">
                {{ data?.author.description }}
              </p>
            </div>
            <div class="col-2 q-mx-lg">
              <q-avatar size="120px">
                <img :src="data?.author.avatar" />
              </q-avatar>
            </div>
          </div>
          <div class="flex row q-my-lg wrap">
            <div class="col-md-3 col-xs-12" v-for="(card, key) in data?.seminars" :key="key">
              <q-card class="my-card" style="margin: 8px;">
                <q-card-section class="flex column justify-between" style="height: 300px">
                  <div>
                    <div class="card-head">{{ card.title }}</div>
                    <div class="card-title">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#FBAD00"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M20.73 7.12L20.59 6.87C20.4094 6.56769 20.1547 6.31643 19.85 6.14L13.14 2.27C12.8362 2.09375 12.4913 2.00062 12.14 2H11.85C11.4987 2.00062 11.1538 2.09375 10.85 2.27L4.14 6.15C3.83697 6.32526 3.58526 6.57697 3.41 6.88L3.27 7.13C3.09375 7.43384 3.00062 7.77874 3 8.13V15.88C3.00062 16.2313 3.09375 16.5762 3.27 16.88L3.41 17.13C3.58979 17.4295 3.84049 17.6802 4.14 17.86L10.86 21.73C11.1623 21.9099 11.5082 22.0033 11.86 22H12.14C12.4913 21.9994 12.8362 21.9063 13.14 21.73L19.85 17.85C20.156 17.6787 20.4087 17.426 20.58 17.12L20.73 16.87C20.9041 16.5653 20.9971 16.221 21 15.87V8.12C20.9994 7.76874 20.9063 7.42384 20.73 7.12ZM11.85 4H12.14L18 7.38L12 10.84L6 7.38L11.85 4ZM13 19.5L18.85 16.12L19 15.87V9.11L13 12.58V19.5Z"
                        />
                      </svg>

                      {{ card.type === 'seminar' ? 'Семинар' : 'Тренинг' }}
                    </div>
                    <div class="card-title" v-if="card.duration">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#C4C4C4"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 9.34784 20.9464 6.8043 19.0711 4.92893C17.1957 3.05357 14.6522 2 12 2ZM12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12C20 14.1217 19.1571 16.1566 17.6569 17.6569C16.1566 19.1571 14.1217 20 12 20ZM12.88 6.5V11.64L16.51 15.27C16.7018 15.4678 16.7018 15.7822 16.51 15.98L15.98 16.51C15.7822 16.7018 15.4678 16.7018 15.27 16.51L11.27 12.51C11.1784 12.4159 11.1249 12.2912 11.12 12.16V6.5C11.12 6.22386 11.3439 6 11.62 6H12.38C12.6561 6 12.88 6.22386 12.88 6.5Z"
                        />
                      </svg>

                      {{ card.duration }}
                    </div>
                    <div class="card-title" v-if="card.dateStart">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#C4C4C4"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M18 4H19C20.1046 4 21 4.89543 21 6V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V6C3 4.89543 3.89543 4 5 4H6V2.5C6 2.22386 6.22386 2 6.5 2H7.5C7.77614 2 8 2.22386 8 2.5V4H16V2.5C16 2.22386 16.2239 2 16.5 2H17.5C17.7761 2 18 2.22386 18 2.5V4ZM5 19H19V8H5V19Z"
                        />
                      </svg>

                      {{ card.dateStart }}
                    </div>
                    <div class="card-text" v-if="card.description">
                      {{ card.description }}
                    </div>
                    <div class="row card-text" v-if="card?.curators">
                      Куратор: {{ card?.curators.join(', ') }}
                    </div>
                  </div>

                  <div class="card-action flex justify-end items-end">
                    <button class="card-action-button" v-if="card.price">{{ card.price }} ₽</button>
                    <button class="card-action-button" v-else style="background: #007FF4">
                      Выбрать тариф
                    </button>
                  </div>
                </q-card-section>
              </q-card>
            </div>
          </div>
        </q-page>
      </q-page-container>
    </q-layout>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useQuasar } from 'quasar';
import { api } from './boot/axios';

export default {
  name: 'LayoutDefault',

  components: {},

  setup() {
    const drawer = ref(true);
    const data = ref();
    const showSubItem = ref(true);
    const q = useQuasar();

    onMounted(async () => {
      api
        .get('/static/fe-test/seminars-test-data.json')
        .then((response) => {
          data.value = response.data;
        })
        .catch(() => {
          q.notify({
            color: 'negative',
            position: 'top',
            message: 'Loading failed',
            icon: 'report_problem',
          });
        });
    });
    return {
      drawer,
      showSubItem,
      q,
      data,
    };
  },
};
</script>
<style scoped lang="scss">
.sidebar {
  &__item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
    color: #191919;
    cursor: pointer;
    margin-top: 4px;
  }
  &__sub-item {
    padding: 0 3rem;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    margin-top: 2px;
    &-selected {
      background: #facb64;
    }
  }
  &__bottom-img {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 80px;
    padding: 16px 32px;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
  }
}
.user-field {
  margin-left: 8px;
}
.img-logo {
  margin-top: 24px;
  margin-bottom: 24px;
}
.header-main {
  font-weight: bold;
  font-size: 36px;
  line-height: 48px;
  margin-right: 16px;
}
.header-second {
  font-weight: bold;
  font-size: 36px;
  line-height: 48px;
  color: #c4c4c4;
  &-mobile {
    font-size: 16px;
    line-height: 24px;
    color: #c4c4c4;
    font-weight: bold;
  }
}
.header-last {
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  color: #007ff4;
}
.author {
  &-topic {
    font-weight: bold;
    font-size: 12px;
    line-height: 16px;
  }
  &-name {
    font-weight: bold;
    font-size: 24px;
    line-height: 32px;
  }
  &-text {
  }
}
.card {
  &-head {
    font-weight: bold;
    font-size: 18px;
    line-height: 24px;
  }
  &-title {
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
  }
  &-text {
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;
  }
  &-action {
    &-button {
      background: #fbad00;
      border-radius: 8px;
      border: none;
      padding: 8px 16px;
      color: #ffffff;
      margin-top: 1.5rem;
      font-weight: bold;
    }
  }
}
.filter-button {
  align-items: center;
  padding: 16px;
  width: 100%;
  height: 48px;
  margin: 1rem;
  background: #f5f5f5;
  border-radius: 8px;
  border: none;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  color: #191919;
  &-number {
    color: #007ff4;
  }
}
</style>
