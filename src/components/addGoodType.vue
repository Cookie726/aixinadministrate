<template>
  <div>
    <el-dialog
      @close="cancel"
      title="商品种类"
      :visible.sync="dialogFormVisible"
    >
      <el-form>
        <el-form-item label="商品种类">
          <el-input v-model="classification" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="cancel">取 消</el-button>
        <el-button type="primary" @click="handleClick">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
// import { Dialog, Message } from "element-ui";
import { addGoodType } from "@/api/indexTable";
export default {
  props: {
    dialogFormVisible: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      classification: "",
    };
  },
  methods: {
    async handleClick() {
      if (!this.classification) {
        window.ELEMENT.Message.error("商品种类不能为空");
        return;
      }
      try {
        let res = await addGoodType({ classification: this.classification });
        if (res.code === 0) {
          window.ELEMENT.Message.success("新增成功");
        } else {
          window.ELEMENT.Message.error(res.msg || "新增失败");
        }
      } catch {
        window.ELEMENT.Message.error("系统错误");
      }
      this.$emit("confirm");
    },
    cancel() {
      this.$emit("cancel");
    },
  },
};
</script>

<style></style>
