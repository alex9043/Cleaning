from django import forms

class CallBackForm(forms.Form):
    name = forms.CharField()
    phone = forms.CharField()
   
