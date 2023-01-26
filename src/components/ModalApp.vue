<template>
    <div
      class="hidden overflow-x-hidden overflow-y-auto fixed inset-0 z-[101] outline-none focus:outline-none justify-center items-center"
    >
      <div class="relative w-auto my-6 mx-auto max-w-6xl animate-fade-in">
        <!--content-->
        <div
          class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none bg-gradient-to-l from-pink-200 to-sky-200"
        >
          <!--header-->
          <div
            class="flex justify-between p-5 border-b border-solid border-slate-200 rounded-t"
          >
            <h3 id="modal-title" class="text-3xl font-semibold">Modal Title</h3>
            <button
              class="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
              id="close-modal-id"
            >
              <svg
                class="inline-block w-4 h-4 stroke-current stroke-0 fill-black"
                viewBox="0 0 32 32"
              >
                <path
                  d="M31.708 25.708c-0-0-0-0-0-0l-9.708-9.708 9.708-9.708c0-0 0-0 0-0 0.105-0.105 0.18-0.227 0.229-0.357 0.133-0.356 0.057-0.771-0.229-1.057l-4.586-4.586c-0.286-0.286-0.702-0.361-1.057-0.229-0.13 0.048-0.252 0.124-0.357 0.228 0 0-0 0-0 0l-9.708 9.708-9.708-9.708c-0-0-0-0-0-0-0.105-0.104-0.227-0.18-0.357-0.228-0.356-0.133-0.771-0.057-1.057 0.229l-4.586 4.586c-0.286 0.286-0.361 0.702-0.229 1.057 0.049 0.13 0.124 0.252 0.229 0.357 0 0 0 0 0 0l9.708 9.708-9.708 9.708c-0 0-0 0-0 0-0.104 0.105-0.18 0.227-0.229 0.357-0.133 0.355-0.057 0.771 0.229 1.057l4.586 4.586c0.286 0.286 0.702 0.361 1.057 0.229 0.13-0.049 0.252-0.124 0.357-0.229 0-0 0-0 0-0l9.708-9.708 9.708 9.708c0 0 0 0 0 0 0.105 0.105 0.227 0.18 0.357 0.229 0.356 0.133 0.771 0.057 1.057-0.229l4.586-4.586c0.286-0.286 0.362-0.702 0.229-1.057-0.049-0.13-0.124-0.252-0.229-0.357z"
                ></path>
              </svg>
            </button>
          </div>
          <!--body-->
          <div id="overview-id" class="relative py-3"></div>
          <!--footer-->
          <div
            class="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b"
          >
            <button
              id="favorite-btn"
              class="bg-sky-700 rounded-lg px-4 py-2 uppercase text-white"
              type="button"
            >
              Add to favorite movies
            </button>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "ModalApp",
    }
</script>

<style lang="scss" scoped>

</style>