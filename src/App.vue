<template>
  <svg xmlns="http://www.w3.org/2000/svg" style="display: none">
    <!--  ICONS  -->
    <!--  Plus Icon  -->
    <symbol
      id="plusIcon"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
      />
    </symbol>

    <!--  Arrow Back  -->
    <symbol
      id="arrowBack"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M10 19l-7-7m0 0l7-7m-7 7h18"
      />
    </symbol>

    <!--  EMOJIS  -->
    <!-- Shit -->
    <symbol id="1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 34">
      <g data-name="Group 50">
        <path
          data-name="Path 21"
          d="M34.17 17.085A17.085 17.085 0 1117.084 0 17.086 17.086 0 0134.17 17.085z"
          fill="currentColor"
        />
        <g data-name="Group 45">
          <g data-name="Group 42">
            <g data-name="Group 41">
              <path
                data-name="Path 22"
                d="M25.928 19.125a.541.541 0 01-.156-.023l-3.629-1.059a.557.557 0 01-.1-1.03s2.824-1.46 3.668-1.911a.557.557 0 11.524.983c-.474.253-1.571.824-2.444 1.277l2.294.67a.557.557 0 01-.156 1.092z"
                fill="#562912"
              />
            </g>
          </g>
          <g data-name="Group 44">
            <g data-name="Group 43">
              <path
                data-name="Path 23"
                d="M8.24 19.125a.557.557 0 01-.156-1.092l2.294-.67c-.873-.453-1.97-1.024-2.445-1.277a.557.557 0 01.524-.983c.846.45 3.668 1.911 3.668 1.911a.557.557 0 01-.1 1.03l-3.628 1.059a.552.552 0 01-.157.022z"
                fill="#562912"
              />
            </g>
          </g>
        </g>
        <g data-name="Group 48">
          <g data-name="Group 46">
            <path
              data-name="Path 24"
              d="M28.145 12.077a.525.525 0 01-.086-.007 6.392 6.392 0 01-4.23-2.777.557.557 0 01.951-.579 5.36 5.36 0 003.45 2.255.557.557 0 01-.085 1.108z"
              fill="#562912"
            />
          </g>
          <g data-name="Group 47">
            <path
              data-name="Path 25"
              d="M6.025 12.077a.557.557 0 01-.085-1.108 5.3 5.3 0 003.449-2.254.557.557 0 01.952.578 6.4 6.4 0 01-4.23 2.777.542.542 0 01-.086.007z"
              fill="#562912"
            />
          </g>
        </g>
        <g data-name="Group 49">
          <path
            data-name="Path 26"
            d="M11.072 26.997a.832.832 0 01-.577-.231l-1.5-1.437a.836.836 0 111.155-1.208l.925.885 2.429-2.322a.834.834 0 011.154 0l2.427 2.322 2.429-2.322a.835.835 0 011.155 0l2.431 2.323.928-.886a.836.836 0 011.154 1.209l-1.505 1.437a.835.835 0 01-1.154 0l-2.434-2.324-2.429 2.323a.837.837 0 01-1.155 0l-2.427-2.322-2.427 2.322a.833.833 0 01-.579.231z"
            fill="#562912"
          />
        </g>
      </g>
    </symbol>

    <!-- Not great -->
    <symbol id="2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 34">
      <path
        data-name="Path 33"
        d="M34.171 17.085A17.085 17.085 0 1117.085.003a17.084 17.084 0 0117.086 17.082z"
        fill="currentColor"
      />
      <g data-name="Group 67">
        <g data-name="Group 66">
          <path
            data-name="Path 34"
            d="M23.686 23.993a.832.832 0 01-.569-.224 8.248 8.248 0 00-5.328-2.13 8.151 8.151 0 00-5.94 2.123.835.835 0 11-1.154-1.208 10.178 10.178 0 0113.56-.008.836.836 0 01-.57 1.447z"
            fill="#562912"
          />
        </g>
      </g>
      <g data-name="Group 76">
        <g data-name="Group 72">
          <g data-name="Group 69">
            <g data-name="Group 68">
              <path
                data-name="Path 35"
                d="M27.796 19.105a.54.54 0 01-.156-.022l-3.629-1.059a.557.557 0 01-.1-1.03s2.823-1.46 3.668-1.91a.557.557 0 11.524.983c-.475.253-1.571.824-2.445 1.277l2.294.67a.557.557 0 01-.156 1.092z"
                fill="#562912"
              />
            </g>
          </g>
          <g data-name="Group 71">
            <g data-name="Group 70">
              <path
                data-name="Path 36"
                d="M7.323 19.105a.557.557 0 01-.156-1.092l2.294-.67a335.868 335.868 0 01-2.445-1.277.557.557 0 11.524-.983c.845.45 3.668 1.91 3.668 1.91a.557.557 0 01-.1 1.03l-3.629 1.059a.536.536 0 01-.156.023z"
                fill="#562912"
              />
            </g>
          </g>
        </g>
        <g data-name="Group 75">
          <g data-name="Group 73">
            <path
              data-name="Path 37"
              d="M28.618 13.169a.617.617 0 01-.085-.006 6.39 6.39 0 01-4.23-2.778.557.557 0 11.951-.578 5.357 5.357 0 003.449 2.253.557.557 0 01-.084 1.108z"
              fill="#562912"
            />
          </g>
          <g data-name="Group 74">
            <path
              data-name="Path 38"
              d="M6.501 13.169a.557.557 0 01-.084-1.108 5.3 5.3 0 003.448-2.253.557.557 0 01.952.578 6.392 6.392 0 01-4.23 2.778.626.626 0 01-.086.005z"
              fill="#562912"
            />
          </g>
        </g>
      </g>
    </symbol>

    <!-- normal -->
    <symbol
      id="3"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 34 34"
      data-name="Group 15"
    >
      <defs />
      <circle
        cx="17.085"
        cy="17.085"
        r="17.085"
        fill="currentColor"
        data-name="Ellipse 1"
        transform="matrix(0 -1 1 0 0 34.17)"
      />
      <g data-name="Group 11">
        <path
          fill="#562912"
          d="M24.882 22.385H9.289a.836.836 0 110-1.671h15.593a.836.836 0 010 1.671z"
          data-name="Path 6"
        />
      </g>
      <g data-name="Group 14">
        <g data-name="Group 12">
          <path
            fill="#562912"
            d="M26.025 14.178a1.8 1.8 0 11-1.8-1.8 1.8 1.8 0 011.8 1.8z"
            data-name="Path 7"
          />
        </g>
        <g data-name="Group 13">
          <path
            fill="#562912"
            d="M11.753 14.178a1.8 1.8 0 11-1.8-1.8 1.8 1.8 0 011.8 1.8z"
            data-name="Path 8"
          />
        </g>
      </g>
    </symbol>

    <!-- Great -->
    <symbol
      id="4"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 34 34"
      data-name="Group 40"
    >
      <defs />
      <circle
        cx="17.085"
        cy="17.085"
        r="17.085"
        fill="currentColor"
        data-name="Ellipse 4"
      />
      <g data-name="Group 36">
        <g data-name="Group 33">
          <g data-name="Group 32">
            <path
              fill="#562912"
              d="M26.986 14.883a.269.269 0 00.411-.223v-.006a2.257 2.257 0 10-4.513 0v.005a.269.269 0 00.411.223 3.515 3.515 0 013.691 0z"
              data-name="Path 18"
            />
          </g>
        </g>
        <g data-name="Group 35">
          <g data-name="Group 34">
            <path
              fill="#562912"
              d="M10.877 14.883a.269.269 0 00.411-.223v-.006a2.257 2.257 0 00-4.515 0v.005a.269.269 0 00.411.223 3.519 3.519 0 013.693 0z"
              data-name="Path 19"
            />
          </g>
        </g>
      </g>
      <g data-name="Group 39">
        <g data-name="Group 38">
          <g data-name="Group 37">
            <path
              fill="#562912"
              d="M17.178 24.867a11.514 11.514 0 01-7.762-3.033.836.836 0 011.138-1.224 9.781 9.781 0 0013.079.155.836.836 0 011.107 1.252 11.4 11.4 0 01-7.562 2.85z"
              data-name="Path 20"
            />
          </g>
        </g>
      </g>
    </symbol>

    <!-- Amazing -->
    <symbol
      id="5"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 34 34"
      data-name="Group 10"
    >
      <defs />
      <path
        fill="currentColor"
        d="M34.17 17.085A17.085 17.085 0 1117.085 0 17.085 17.085 0 0134.17 17.085z"
        data-name="Path 1"
      />
      <g data-name="Group 5">
        <g data-name="Group 2">
          <g data-name="Group 1">
            <path
              fill="#562912"
              d="M28.38 14.882a.268.268 0 00.41-.223 2.257 2.257 0 10-4.514 0 .269.269 0 00.411.223 3.52 3.52 0 013.693 0z"
              data-name="Path 2"
            />
          </g>
        </g>
        <g data-name="Group 4">
          <g data-name="Group 3">
            <path
              fill="#562912"
              d="M9.483 14.882a.269.269 0 00.411-.223 2.257 2.257 0 10-4.514 0 .269.269 0 00.411.223 3.52 3.52 0 013.692 0z"
              data-name="Path 3"
            />
          </g>
        </g>
      </g>
      <g data-name="Group 7">
        <g data-name="Group 6">
          <path
            fill="#562912"
            d="M8.349 19.673a1.013 1.013 0 00-.645 1.315 10.383 10.383 0 0018.762 0 1.014 1.014 0 00-.645-1.315 29.172 29.172 0 00-17.472 0z"
            data-name="Path 4"
          />
        </g>
      </g>
      <g data-name="Group 9">
        <g data-name="Group 8">
          <path
            fill="#cc342f"
            d="M12.388 25.82a10.571 10.571 0 009.4 0 7.849 7.849 0 00-9.4 0z"
            data-name="Path 5"
          />
        </g>
      </g>
    </symbol>
  </svg>

  <the-header />
  <div class="container mx-auto mt-5 px-5 md:px-0">
    <router-view v-slot="{ Component }">
      <transition name="route" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";

export default {
  components: {
    TheHeader,
  },
};
</script>

<style scoped>
.route-enter-from {
  opacity: 0;
  transform: scale(0.95);
}

.route-enter-active,
.route-leave-active {
  transition: all 0.3s ease;
}

.route-enter-to,
.route-leave.from {
  opacity: 1;
  transform: scale(1);
}

.route-leave-to {
  opacity: 0;
  transform: scale(0.95);
}
</style>