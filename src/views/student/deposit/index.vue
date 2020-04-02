<template>
  <div>
    <el-form v-model="form" label-width="90px">
      <el-form-item label="日用币" style="max-width: 200px">
        <el-input-number v-model="form.riyong" :min="0"></el-input-number>
      </el-form-item>
      <el-form-item label="服装币" style="max-width: 200px">
        <el-input-number v-model="form.fuzhuang" :min="0"></el-input-number>
      </el-form-item>
      <el-form-item label="资助对象">
        <el-select v-model="form.imburseType" placeholder="请选择">
          <el-option
            v-for="item in imburseType"
            :key="item.imburseType"
            :label="item.imburseTypeName"
            :value="item.imburseType"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleCharge">充值</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { onCharge } from "@/api/student";
export default {
  data() {
    return {
      imburseType: [
        {
          imburseType: 1,
          imburseTypeName: "特别资助对象"
        },
        {
          imburseType: 2,
          imburseTypeName: "重点资助对象"
        },
        {
          imburseType: 3,
          imburseTypeName: "一般资助对象"
        }
      ],
      form: {
        riyong: 0,
        fuzhuang: 0,
        imburseType: ""
      }
    };
  },
  methods: {
    handleCharge() {
      onCharge(this.form);
    }
  }
};
</script>

<style></style>
