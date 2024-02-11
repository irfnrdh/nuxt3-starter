<template>
  <div>

    <h3 class="text-center text-4xl mb-10">Sign In</h3>

    <form @submit="onSubmit" class="mx-auto max-w-md">
    <fieldset :disabled="isSubmitting" class="space-y-5">
      <UiVeeInput label="Email" name="email" type="email" />
      <UiVeeInput label="Password" name="password" type="password" />
      <UiButton type="submit"> Login </UiButton>
    </fieldset>
   
    <NuxtLink to="/auth/register"><span class="">Dont Have Account? Register</span></NuxtLink>
  </form>

   

  </div>
  
</template>

<script lang="ts" setup>
  import { z } from "zod";

  const schema = z.object({
    password: z.string({ required_error: "Required" }).min(3, { message: "Min 3 characters" }),
    email: z.string({ required_error: "Required" }).email("Please enter a valid email"),
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
