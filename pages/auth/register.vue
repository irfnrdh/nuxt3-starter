<template>
  <div >
    <h3 class="text-center text-4xl mb-10">Register</h3>
    <form @submit="onSubmit" class="mx-auto max-w-md">
    <fieldset :disabled="isSubmitting" class="space-y-5">
      <UiVeeInput label="Full name" name="name" hint="This will be displayed to the public" />
      <UiVeeInput label="Email" name="email" type="email" />
      <UiVeeInput label="Age" name="age" type="number" />
      <UiVeeInput label="Password" name="password" type="password" />
      <UiButton type="submit"> Register </UiButton>
    </fieldset>
    <NuxtLink to="/auth/login"><span class="">Have An Account? Login</span></NuxtLink>
  </form>
  </div>
 
</template>

<script lang="ts" setup>
  import { z } from "zod";

  const schema = z.object({
    name: z.string({ required_error: "Required" }).min(3, { message: "Min 3 characters" }),
    age: z
      .number({
        coerce: true,
        required_error: "Required",
        invalid_type_error: "Please enter a number",
      })
      .int("Only numbers are allowed")
      .min(18, "You must be at least 18 years old")
      .max(120, "You must be less than 120 years old"),
    email: z.string({ required_error: "Required" }).email("Please enter a valid email"),
    password: z.string({ required_error: "Required" }).min(3, { message: "Min 3 characters" }),
  });

  const { handleSubmit, isSubmitting } = useForm({
    validationSchema: toTypedSchema(schema),
  });

  const onSubmit = handleSubmit(async (values) => {
    const promise = () => new Promise((resolve) => setTimeout(resolve, 3000));
    useSonner.promise(promise, {
      loading: "Sending information to our servers...",
      success: (d) => "We updated your information.",
      error: (e) => "Error! Your information could not be sent to our servers!",
    });
  });
</script>




<style scoped>
  /* Component styles */
</style>
