<template>
  <div>
    <el-form ref="form" :rules="rules" :model="form" label-width="80px">
      <el-form-item label="条形码" prop="barcode">
        <el-input style="width: 320px" v-model.number="form.barcode"></el-input>
      </el-form-item>
      <el-form-item label="商品名称">
        <el-input style="width: 320px" placeholder="请输入商品名称" v-model="form.goodsName"></el-input>
      </el-form-item>
      <el-form-item label="规格" prop="specs">
        <el-input style="width: 320px" v-model="form.specs"></el-input>
      </el-form-item>
      <el-form-item label="商品价格" prop="price">
        <el-input
          style="width: 320px"
          placeholder="请输入商品价格"
          v-model.number="form.price"
          class="input-with-select"
        >
          <el-select
            v-model="form.moneyType"
            class="money-type-select"
            slot="prepend"
            placeholder="选择爱心币种类"
          >
            <el-option label="日用币" value="0"></el-option>
            <el-option label="服装币" value="1"></el-option>
          </el-select>
          <span slot="suffix" class="el-input__icon">元</span>
        </el-input>
      </el-form-item>
      <el-form-item label="限购数量">
        <el-input-number v-model="form.limitBuyNum" :min="-1" label="描述文字"></el-input-number>
        <span class="tips">注：-1 表示不限制购买数量</span>
      </el-form-item>
      <el-form-item v-if="form.limitBuyNum != -1" label="限购类型">
        <el-select v-model="form.limitBuyType">
          <el-option label="学期限购" value="0"></el-option>
          <el-option label="每月限购" value="1"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="商品图片">
        <el-upload
          class="upload-demo"
          drag
          :on-success="handleSuccess"
          action="https://jsonplaceholder.typicode.com/posts/"
          list-type="picture"
        >
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">
            将文件拖到此处，或
            <em>点击上传</em>
          </div>
          <div class="el-upload__tip" slot="tip">*只能上传jpg/png文件</div>
        </el-upload>
      </el-form-item>
      <el-form-item label="商品种类" prop="goodsType">
        <el-select v-model="form.goodsType" placeholder="请选择">
          <el-option
            v-for="item in goodsTypeList"
            :key="item.goodsTypeId"
            :label="item.goodsType"
            :value="item.goodsTypeId"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit('form')">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import {
  validateBarcode,
  validatePrice,
  validateSpecs,
  isEmpty
} from "../../../utils/validate";
import { getGoodsTypeQueryIndexTable } from "../../../api/indexTable";
export default {
  data() {
    const _validateBarcode = (rule, value, callback) => {
      validateBarcode(value, callback);
    };
    const _validatePrice = (rule, value, callback) => {
      validatePrice(value, callback);
    };
    const _validateSpecs = (rule, value, callback) => {
      validateSpecs(value, callback);
    };
    const _validateGoodsType = (rule, value, callback) => {
      isEmpty(value, callback, "请选择商品类型");
    };
    return {
      form: {
        barcode: "",
        goodsName: "",
        specs: "",
        price: "",
        moneyType: null,
        images: "",
        goodsType: "",
        limitBuyNum: -1,
        limitBuyType: ""
      },
      rules: {
        barcode: [
          {
            validator: _validateBarcode,
            trigger: "blur"
          }
        ],
        price: [
          {
            validator: _validatePrice,
            trigger: "blur"
          }
        ],
        specs: [
          {
            validator: _validateSpecs,
            trigger: "blur"
          }
        ],
        goodsType: [
          {
            validator: _validateGoodsType,
            trigger: "change"
          }
        ]
      },
      goodsTypeList: []
    };
  },
  mounted() {
    getGoodsTypeQueryIndexTable().then(res => {
      this.goodsTypeList = res.goodsTypeList;
    });
  },
  methods: {
    onSubmit(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          console.log("d");
        } else {
          return false;
        }
      });
    },
    handleSuccess(res, file) {
      console.log(URL.createObjectURL(file.raw));
    }
  }
};
</script>
<style lang="scss">
.el-select .el-input {
  width: 130px;
}
.input-with-select .el-input-group__prepend {
  background-color: #fff;
}

.money-type-select {
  width: 160px;
  .el-input--suffix {
    width: 160px;
  }
}

.tips {
  margin-left: 20px;
  color: #f56c6c;
  font-family: "Microsoft YaHei";
}
</style>