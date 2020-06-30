import { Action, Module, Mutation, VuexModule } from "vuex-module-decorators"
import * as atypes from "../action-types"
import * as types from "../mutation-types"

@Module
export default class Topics extends VuexModule {
  test = false

  @Mutation
  [types.MUTATION]() {
    this.test = false
  }

  @Action
  [atypes.ACTION](){
    this.context.commit(types.MUTATION)
  }
}
