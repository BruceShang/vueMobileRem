import Vue from 'vue'
import filters from './filters'

Object.keys(filters).forEach(key => Vue.filter(key, filters[key]))
