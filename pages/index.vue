<template>
  <div>

    <div>

      <v-row>
        <v-col 
        v-for="(item,key) in workers" 
        :key="key"
        col="12"
        lg="4"
        >
            <v-card
              outline
              elevation="1"
              height="300"
            >
              <div class="d-flex justify-center pa-5">
                <v-avatar size="80" color="primary">
                  <span class="white--text text-h5">CJ</span>
                </v-avatar>
              </div>

              <h3 class="text-center">{{item.get('fullname')}}</h3>
              
              <v-card-text class="pa-5">
                <div v-if="item.get('description') != undefined ">
                  <v-slide-group
                    multiple
                    show-arrows
                  >
                    <v-slide-item
                      v-for="(expertise, key) in item.get('description')"
                      :key="key"
                      v-slot="{ active, toggle }"
                    >
                      <v-btn
                        class="mx-2"
                        :input-value="active"
                        small
                        style="text-transform:none;"
                        active-class="purple white--text"
                        depressed
                        rounded
                        @click="toggle"
                      >
                        {{ expertise }}
                      </v-btn>
                    </v-slide-item>
                  </v-slide-group>
                </div>
                <div class="my-1 text-center" v-else>
                  <h1>No Expertise Set</h1>
                </div>
              </v-card-text>

              <v-card-actions>
                <v-btn
                depressed
                rounded
                style="text-transform:none;"
                color="primary"
                >
                  Make Appointment
                </v-btn>
                <v-btn
                depressed
                rounded
                style="text-transform:none;"
                :to="'/message/'+item.id"
                dark
                color="pink"
                >
                  Message
                </v-btn>
              </v-card-actions>

            </v-card>
        </v-col>
      </v-row>


    </div>

  </div>
</template>

<script>
import Moralis from 'moralis';

export default {
  data(){
    return {
      workers: []
    }
  },
  methods:{
    async get_all_workers () {
      const workers = await Moralis.Cloud.run("get_workers");
      return this.workers = workers;
    }
  },

  mounted(){
    this.get_all_workers();
  }

}

</script>
