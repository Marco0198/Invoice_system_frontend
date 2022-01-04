<template>
  <div>
    <form @submit.prevent="submitForm">
      <b-card
        style="
          width: 800px;
          margin: auto;
          margin-top: 100px;
          margin-bottom: 100px;
          height: auto;
        "
      >
        <!-- Company details section  on the left side top of the page-->
        <b-card div class="card border-0">
          <div class="float-left">
            <h4>d6 Group</h4>
            <div class="text-left">
              Octo Place, Block B,<br />
              Elektron Road, Techno Park
            </div>
            <div>Stellenbosch, 7600</div>
            <div>Phone: +27 87 820 0088</div>
            <div>Fax: +27 87 820 0088</div>
            <div>Website: d6.co.za</div>
          </div>
          <!-- End of Company details section  on the left side top of the page-->

          <!-- invoice details section  on the right side top of the page-->
          <div class="invoice float-right text-right">
            <h2>INVOICE</h2>
            <div class="">
              <label class="mr-2" for="date"><small>DATE</small></label>
              <input
                type="date"
                class="form-control"
                v-model="$v.invoice.invoice_date.$model"
                :class="{ 'is-invalid': $v.invoice.invoice_date.$error }"
                id="date"
                placeholder=""
              />
              <div v-if="$v.invoice.invoice_date" class="invalid-feedback">
                <div class="mb-2" v-if="!$v.invoice.invoice_date.required">
                  invoice date is required
                </div>
              </div>
              <div class="text-danger text-center" v-if="error && error.errors">
                <p>{{ error.errors.invoice_date }}</p>
              </div>
            </div>
            <div>
              <label class="mr-2" for="invoice"><small>INVOICE#</small></label>
              <input
                type="text"
                v-model="$v.invoice.invoice_number.$model"
                id="invoice"
                class="form-control"
                :class="{ 'is-invalid': $v.invoice.invoice_number.$error }"
              />
              <div v-if="$v.invoice.invoice_number" class="invalid-feedback">
                <div class="mb-2" v-if="!$v.invoice.invoice_number.required">
                  invoice number is required
                </div>
                <div v-if="!$v.invoice.invoice_number.minLength">
                  invoice number min length is 4
                </div>
                <div v-if="!$v.invoice.invoice_number.maxLength">
                  invoice number max length is 4
                </div>
              </div>
              <div class="text-danger text-center" v-if="error && error.errors">
                <p>
                  <small>{{ error.errors.invoice_number }}</small>
                </p>
              </div>
            </div>
            <div class="">
              <label class="mr-2" for="customer"
                ><small>CUSTOMER ID</small></label
              >
              <input
                type="text"
                v-model="$v.invoice.customer_id.$model"
                id="customer"
                class="form-control"
                :class="{ 'is-invalid': $v.invoice.customer_id.$error }"
              />
              <div v-if="$v.invoice.customer_id" class="invalid-feedback">
                <div class="mb-2" v-if="!$v.invoice.customer_id.required">
                  customer id is required
                </div>
              </div>
              <div class="text-danger text-center" v-if="error && error.errors">
                <p>
                  <small>{{ error.errors.customer_id }}</small>
                </p>
              </div>
            </div>
            <div class="">
              <label class="mr-2" for="due"><small>DUE DATE</small></label>
              <input
                type="date"
                class="form-control"
                v-model="$v.invoice.invoice_due_date.$model"
                id="due"
                :class="{ 'is-invalid': $v.invoice.invoice_due_date.$error }"
              />
              <div v-if="$v.invoice.invoice_due_date" class="invalid-feedback">
                <div class="mb-2" v-if="!$v.invoice.invoice_due_date.required">
                  invoice due date id is required
                </div>
              </div>
            </div>
          </div>
        </b-card>
        <!--end  of invoice details section -->
        <!-- bill to  details section  -->
        <b-card div class="card border-0">
          <div class="float-left">
            <h6 class="mb-3">BILL TO</h6>
            <div class="mb-1">
              <input
                type="text"
                v-model="$v.invoice.receiver_name.$model"
                class="form-control"
                placeholder="[Name]"
                :class="{ 'is-invalid': $v.invoice.receiver_name.$error }"
              />
              <div v-if="$v.invoice.receiver_name" class="invalid-feedback">
                <div class="mb-2" v-if="!$v.invoice.receiver_name.required">
                  receiver name is required
                </div>
              </div>
            </div>
            <div class="mb-1">
              <input
                type="text"
                v-model="$v.invoice.receiver_company_name.$model"
                class="form-control"
                placeholder="[Company Name]"
                :class="{
                  'is-invalid': $v.invoice.receiver_company_name.$error,
                }"
              />
              <div
                v-if="$v.invoice.receiver_company_name"
                class="invalid-feedback"
              >
                <div
                  class="mb-2"
                  v-if="!$v.invoice.receiver_company_name.required"
                >
                  receiver name is required
                </div>
              </div>
            </div>
            <div class="mb-1">
              <input
                type="text"
                v-model="$v.invoice.receiver_address.$model"
                class="form-control"
                placeholder="[Street Address]"
                :class="{ 'is-invalid': $v.invoice.receiver_address.$error }"
              />
              <div v-if="$v.invoice.receiver_address" class="invalid-feedback">
                <div class="mb-2" v-if="!$v.invoice.receiver_address.required">
                  receiver address is required
                </div>
              </div>
            </div>
            <div class="mb-1">
              <input
                type="text"
                v-model="$v.invoice.receiver_city.$model"
                class="form-control"
                placeholder="[City,st,Zip]"
                :class="{ 'is-invalid': $v.invoice.receiver_city.$error }"
              />
              <div v-if="$v.invoice.receiver_city" class="invalid-feedback">
                <div class="mb-2" v-if="!$v.invoice.receiver_city.required">
                  receiver city is required
                </div>
              </div>
            </div>
            <div class="mb-1">
              <input
                type="text"
                v-model="$v.invoice.receiver_phone_number.$model"
                class="form-control"
                placeholder="Phone:[000-000-0000]"
                :class="{
                  'is-invalid': $v.invoice.receiver_phone_number.$error,
                }"
              />
              <div
                v-if="$v.invoice.receiver_phone_number"
                class="invalid-feedback"
              >
                <div
                  class="mb-2"
                  v-if="!$v.invoice.receiver_phone_number.required"
                >
                  receiver phone number is required
                </div>
                <div v-if="!$v.invoice.receiver_phone_number.minLength">
                  phone number min length is 10
                </div>
                <div v-if="!$v.invoice.receiver_phone_number.maxLength">
                  phone number max length is 10
                </div>
              </div>
            </div>
          </div>
        </b-card>

        <div>
          <!-- end of bill to  details section  -->
          <!-- invoice items details section  -->
          <table class="responsive-table">
            <thead>
              <tr>
                <th style="width: 70%">Description</th>
                <th>Taxed</th>
                <th>Amount</th>
                <th></th>
              </tr>
            </thead>
            <tr v-for="(item, index) in items" :key="index">
              <td data-label="Item">
                <input
                  type="text"
                  v-model="item.description"
                  placeholder="item name"
                  required
                />
              </td>
              <td></td>
              <td data-label="Price/unite">
                <div class="cell-with-input">
                  <input
                    type="number"
                    min="0"
                    v-model="item.price"
                    placeholder="item price R0"
                    required
                  />
                </div>
              </td>
              <td class="text-right">
                <button class="border-0" @click="deleteItem(index)">
                  <b-icon icon="archive-fill" variant="danger"></b-icon>
                </button>
              </td>
            </tr>
          </table>
          <!-- end of invoice items details section  -->
          <input
            value="Add item"
            type="button"
            class="btn btn-danger mt-3"
            v-on:click.self="addNewItem()"
          />
        </div>
        <!-- invoice details  for subtotal, total ,tax etc.. section  -->
        <div class="float-right text-right">
          <div class="mt-1">
            <label class="mr-2" for="date"><small>Subtotal</small></label>
            <input
              class="border-0"
              type="text"
              v-model="subTotal"
              id="date"
              placeholder=""
              value="subTotal"
            />
          </div>
          <div class="">
            <label class="mr-2" for="invoice"><small>taxable</small></label>
            <input
              class="border-0"
              type="text"
              v-model="taxable"
              id="invoice"
            />
          </div>
          <div class="">
            <label class="mr-2" for="customer"><small>tax rate</small></label>
            <input type="text" v-model="taxRate" id="customer" />
          </div>
          <div class="">
            <label class="mr-2" for="due"><small>tax due</small></label>
            <input class="border-0" type="text" v-model="taxTotal" id="due" />
          </div>
          <div class="">
            <label class="mr-2" for="due"><small>other </small></label>
            <input class="border-0" type="number" v-model="other" id="due" />
          </div>
          <hr />
          <div class="">
            <label class="mr-2" for="total"><strong>TOTAL </strong></label>
            <input
              class="border-0"
              type="text"
              v-model="grandTotal"
              id="total"
            />
          </div>
          <small>
            <p class="text-center">make all checks payable to <br />d6 Group</p>
          </small>
        </div>
        <!-- end of invoice details  for subtotal, total ,tax etc.. section  -->
        <!--  invoice comments  section  -->
        <div
          class="card"
          style="
            width: 28rem;
            height: 12rem;
            margin-bottom: 150px;
            margin-top: 50px;
          "
        >
          <div class="card-body">
            <h6 class="title">OTHER COMMMENTS</h6>
            <span class="card-text">1.Total payment due in 30 days</span><br />
            <span class="card-text">
              2.Please include the invoice number on your your check
            </span>
          </div>
        </div>
        <div class="card text-center border-0">
          <p>
            if you have any question about this invoice,please contact <br />
            <small>Marco,0727408325, tshimangamarco@gmail.com</small>
          </p>
          <strong>Thanks You For Your Business!</strong>
        </div>
        <!--  invoice comments  section  -->
        <div class="alert alert-success text-center" v-if="message">
          <p>{{ message }}</p>
        </div>
        <div
          class="alert alert-danger text-center"
          v-if="error && error.errors"
        >
          <p>{{ error.message }}</p>
        </div>
        <button
          type="submit"
          :disabled="$v.$invalid || submitStatus"
          class="btn btn-primary"
        >
          Create Invoice <b-spinner small v-if="submitStatus"></b-spinner>
        </button>
      </b-card>
    </form>
  </div>
</template>

<style scoped>
h4 {
  color: #369;
}

h2 {
  color: #7a8dc5;
}

h6 {
  background-color: #283a72;
  color: #fff;
  width: 250px;
}

table {
  border: 1px solid rgb(209, 208, 208);
  height: auto;
  width: 100%;
}

thead {
  background-color: #283a72;
  color: #fff;
  font-size: 12px;
}

td {
  border: 1px solid #283a72;
}

tr {
  border: 1px solid #283a72;
}

table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

hr {
  border: 1px solid black;
}

td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}

.title {
  width: 447px;
  margin-top: -20px;
  margin-left: -20px;
  padding-left: 20px;
}

.invoice .form-control {
  width: 190px;
  height: 30px;
  float: right;
}
</style>

<script>
import { required, minLength, maxLength } from "vuelidate/lib/validators";
import axios from "axios";
export default {
  data() {
    return {
      invoice: {
        invoice_date: "",
        invoice_number: "",
        customer_id: "",
        invoice_due_date: "",
        receiver_name: "",
        receiver_company_name: "",
        receiver_address: "",
        receiver_city: "",
        receiver_phone_number: "",
      },
      items: [
        {
          description: "",
          price: 0,
          invoice_number: 0,
        },
      ],
      other: 0,
      taxable: 0,
      taxRate: 15,
      discountRate: 0,
      message: "",
      error: "",
      submitStatus: false,
    };
  },

  validations: {
    invoice: {
      invoice_date: {
        required,
      },
      invoice_number: {
        required,
        minLength: minLength(4),
        maxLength: maxLength(4),
      },
      customer_id: {
        required,
      },
      invoice_due_date: {
        required,
      },
      receiver_name: {
        required,
      },
      receiver_company_name: {
        required,
      },
      receiver_address: {
        required,
      },
      receiver_city: {
        required,
      },
      receiver_phone_number: {
        required,
        minLength: minLength(10),
        maxLength: maxLength(10),
      },
    },
    items: {
      description: required,
      price: required,
    },
  },
  computed: {
    // this function is responsible of the calculating the subtotal
    subTotal: function () {
      var total = this.items.reduce(function (accumulator, item) {
        return accumulator + item.price * 1;
      }, 0);
      return total;
    },
    // this function is responsible of the calculating the total total tax
    taxTotal: function () {
      var total = this.subTotal * (this.taxRate / 100);
      return total;
    },
    // this function is responsible of the calculating the total
    grandTotal: function () {
      var total = this.subTotal + this.taxTotal + Number(this.other);
      return total;
    },
  },

  methods: {
    // this function is responsible of adding new field when creating a new product
    addNewItem() {
      this.items.push({
        description: "",
        quantity: 0,
        price: 0,
        invoice_number: 0,
      });
    },
    // this function is responsible of deleting invoice item by is index
    deleteItem: function (index) {
      this.items.splice(index, 1);
    },
    // this function is responsible of submiting data to the database using axios and the post request
    submitForm() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }
      this.submitStatus = true;
      (this.message = ""), (this.error = "");
      this.items.forEach((element) => {
        element.invoice_number = this.invoice.invoice_number;
        console.log(element.invoice_number);
      });

      axios
        .post("http://127.0.0.1:8000/api/invoices", {
          invoice_date: this.invoice.invoice_date,
          invoice_number: this.invoice.invoice_number,
          customer_id: this.invoice.customer_id,
          invoice_due_date: this.invoice.invoice_due_date,
          receiver_name: this.invoice.receiver_name,
          receiver_company_name: this.invoice.receiver_company_name,
          receiver_address: this.invoice.receiver_address,
          receiver_city: this.invoice.receiver_city,
          receiver_phone_number: this.invoice.receiver_phone_number,
          subtotal: this.subTotal,
          taxable: this.taxable,
          tax_rate: this.taxRate,
          tax_due: this.taxTotal,
          other: this.invoice.other,
          total_amount: this.grandTotal,
          invoice_items: this.items,
        })
        .then((res) => {
          this.message = res.data.message;
          console.log(this.message);
        })
        .catch((error) => {
          if (error.response.status == 422) {
            this.error = error.response.data;
            console.log(this.error.message);
          }
        })
        .finally(() => {
          this.submitStatus = false;
        });
    },
  },
};
</script>
