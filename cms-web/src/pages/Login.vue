<!-- eslint-disable vue/multi-word-component-names -->
// eslint-disable-next-line vue/multi-word-component-names
<template>
  <q-layout>
    <q-header bordered>
      <q-toolbar>
        <q-avatar>
          <img src="../assets/logo_no_text.svg" />
        </q-avatar>
        <q-toolbar-title class="text-black text-header"
          >Sơn Chu</q-toolbar-title
        >
        <q-btn
          class="text-black"
          flat
          round
          dense
          icon="account_circle"
        ></q-btn>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <q-page class="flex bg-accent justify-center">
        <q-card class="container">
          <q-card-section>
            <div class="text-center">
              <div class="col ellipsis text_login q-mb-lg">Đăng Nhập</div>
            </div>
          </q-card-section>
          <q-card-section>
            <q-form class="q-gutter-md">
              <InputLogin
                label="Tên đăng nhập"
                placeholder="Tên đăng nhập"
                style="margin-bottom: 35px"
                inputType="text"
              />

              <InputLogin
                label="Mật Khẩu"
                placeholder="Mật Khẩu"
                style="margin-bottom: 35px"
                inputType="password"
                showPassword="true"
              />

              <div style="height: 50px; border-radius: 30px">
                <q-btn
                  class="btn-login"
                  label="Đăng Nhập"
                  to="/"
                  type="button"
                  color="primary"
                />
              </div>
            </q-form>
          </q-card-section>
        </q-card>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent } from "vue";
import { ref } from "vue";
import InputLogin from "components/InputLogin.vue";
export default defineComponent({
  name: "LoginPage",
  components: {
    InputLogin,
  },
  setup() {
    return {
      username: ref("Pratik"),
      password: ref("12345"),
    };
  },
 
});
</script>

<style scoped>
.container {
  width: 696px;
  height: 489px;
  padding: 40px 160px 87px 160px;
  margin: 5%;
}
.text-header {
  font-size: 30px;
  font-weight: 600;
}
.btn-login {
  width: 100%;
  height: 100%;
  border-radius: 8px;
}
.q-header {
  padding: 8px;
  background-color: white;
  border-bottom: 1px solid #e9eaec;
}
</style>
<style lang="scss" scoped>
.text_login {
  color: $primary;
  font-size: 35px;
  font-weight: 600;
}
</style>
