# app.py
from flask import Flask, render_template, request
import joblib

app = Flask(__name__)

# Load your trained machine learning model
model = joblib.load('model.pkl')

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/predict', methods=['POST'])
def predict():
    if request.method == 'POST':
        # Get input values from the form
        restaurant_id = int(request.form['restaurant_id'])
        center_id = int(request.form['center_id'])
        week = int(request.form['week'])
        base_price = float(request.form['base_price'])
        checkout_price = float(request.form['checkout_price'])
        emailer_for_promotion = int(request.form['emailer_for_promotion'])
        homepage_featured = int(request.form['homepage_featured'])

        # Make prediction using the model
        input_data = [[restaurant_id, center_id, week, base_price, checkout_price, emailer_for_promotion, homepage_featured]]
        prediction = model.predict(input_data)[0]

        return render_template('result.html', prediction=prediction)

if __name__ == '__main__':
    app.run(debug=True)
